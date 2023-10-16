alter table if exists user_profiles drop column id;
alter table if exists user_profiles add primary key (user_id);
