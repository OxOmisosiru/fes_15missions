-- Supabase SQL Editor で実行してください。
-- `password` には平文ではなく、参加者配布用のランダムなパスワードを保存してください。
create table if not exists public.participants (
  uuid uuid primary key default gen_random_uuid(),
  nickname text not null
);

-- 以前のパスワードあり・ニックネーム重複不可スキーマから移行する場合にも対応します。
alter table public.participants drop column if exists password;
alter table public.participants drop constraint if exists participants_nickname_key;

create table if not exists public.missions (
  mission_idx integer primary key check (mission_idx > 0),
  is_cleared boolean not null default false,
  who uuid references public.participants(uuid),
  "when" timestamptz
);

create table if not exists public.answers (
  id bigint generated always as identity primary key,
  mission_idx integer not null references public.missions(mission_idx),
  who uuid not null references public.participants(uuid),
  ans text[] not null,
  created_at timestamptz not null default now()
);

insert into public.missions (mission_idx)
select generate_series(1, 12)
on conflict (mission_idx) do nothing;

-- このアプリはサーバーの Service Role Key を利用するため、匿名アクセスは不要です。
alter table public.participants enable row level security;
alter table public.missions enable row level security;
alter table public.answers enable row level security;
