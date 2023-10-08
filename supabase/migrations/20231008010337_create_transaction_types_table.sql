create table transaction_types (
    id serial primary key,
    name varchar(50) not null,

    date_created timestamp not null default(now()),
    date_modified timestamp not null default(now())
);

alter table if exists transaction_types enable row level security;

create policy "Authenticated users can read transaction types"
    on transaction_types for select
    to authenticated
    using (true);
