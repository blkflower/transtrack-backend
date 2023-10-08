create table categories (
    id serial primary key,
    name varchar(50) not null,

    date_created timestamp not null default(now()),
    date_modified timestamp not null default(now())
);

alter table if exists categories enable row level security;

create policy "Authenticated users can read categories"
    on categories for select
    to authenticated
    using (true);
