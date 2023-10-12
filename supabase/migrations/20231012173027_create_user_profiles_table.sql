create table user_profiles (
    id serial primary key,
    user_id uuid not null,

    first_name varchar(50) not null,
    last_name varchar(50) not null,
    photo_url text not null,

    date_created timestamp not null default(now()),
    date_modified timestamp not null default(now()),

    constraint fk_user
        foreign key (user_id) references auth.users(id)
        on delete cascade
);

alter table if exists user_profiles enable row level security;

create policy "Users can manage their own profiles"
    on user_profiles for all
    to authenticated
    using (auth.uid() = user_id);
