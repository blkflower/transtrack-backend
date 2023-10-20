create type transaction_type as enum ('balance', 'expense');

alter table if exists transactions
    add column if not exists transaction_type transaction_type not null,
    drop constraint if exists fk_transaction_type,
    drop column if exists transaction_type_id;

drop table if exists transaction_types;
