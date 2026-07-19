DROP POLICY IF EXISTS "Admins can read all case studies" ON public.case_studies;
DROP POLICY IF EXISTS "Admins can insert case studies" ON public.case_studies;
DROP POLICY IF EXISTS "Admins can update case studies" ON public.case_studies;
DROP POLICY IF EXISTS "Admins can delete case studies" ON public.case_studies;

CREATE POLICY "Admins can read all case studies"
  ON public.case_studies FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

CREATE POLICY "Admins can insert case studies"
  ON public.case_studies FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

CREATE POLICY "Admins can update case studies"
  ON public.case_studies FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

CREATE POLICY "Admins can delete case studies"
  ON public.case_studies FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;