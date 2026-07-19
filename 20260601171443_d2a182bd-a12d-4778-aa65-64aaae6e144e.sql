
-- Reusable updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text not null default '',
  tag text not null default '',
  company text not null default '',
  year text not null default '',
  role text not null default '',
  hero text not null default '',
  hero_image text,
  metrics jsonb not null default '[]'::jsonb,
  problem text not null default '',
  opportunity text not null default '',
  research jsonb not null default '[]'::jsonb,
  insights jsonb not null default '[]'::jsonb,
  decisions jsonb not null default '[]'::jsonb,
  roadmap jsonb not null default '[]'::jsonb,
  execution jsonb not null default '[]'::jsonb,
  results jsonb not null default '[]'::jsonb,
  learnings jsonb not null default '[]'::jsonb,
  stack jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.case_studies to anon;
grant select, insert, update, delete on public.case_studies to authenticated;
grant all on public.case_studies to service_role;

alter table public.case_studies enable row level security;

create policy "Public can read published case studies"
  on public.case_studies for select
  to anon
  using (published = true);

create policy "Authenticated can read all case studies"
  on public.case_studies for select
  to authenticated
  using (true);

create policy "Authenticated can insert case studies"
  on public.case_studies for insert
  to authenticated
  with check (true);

create policy "Authenticated can update case studies"
  on public.case_studies for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated can delete case studies"
  on public.case_studies for delete
  to authenticated
  using (true);

create trigger case_studies_set_updated_at
before update on public.case_studies
for each row execute function public.set_updated_at();

create index case_studies_sort_idx on public.case_studies (sort_order, created_at);
