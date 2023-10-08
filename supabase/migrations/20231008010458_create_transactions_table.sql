create table transactions (
    id serial primary key,
    user_id uuid not null,

    amount double precision not null,
    description text,
    attachment_url text,

    transaction_type_id int not null,
    transaction_date timestamp not null,
    category_id int,

    date_created timestamp not null default(now()),
    date_modified timestamp not null default(now()),

    constraint fk_user
        foreign key (user_id) references auth.users(id)
        on delete set null,
    constraint fk_transaction_type
        foreign key (transaction_type_id) references transaction_types(id)
        on delete set null,
    constraint fk_category
        foreign key (category_id) references categories(id)
        on delete set null
);

alter table if exists transactions enable row level security;

create policy "Users can manage their own transactions"
    on transactions for all
    to authenticated
    using (auth.uid() = user_id)
