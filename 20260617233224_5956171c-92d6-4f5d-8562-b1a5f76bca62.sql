DROP POLICY IF EXISTS "Authenticated can read all case studies" ON public.case_studies;

CREATE POLICY "Admins can read all case studies"
  ON public.case_studies FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated can read published case studies"
  ON public.case_studies FOR SELECT
  TO authenticated
  USING (published = true);

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;