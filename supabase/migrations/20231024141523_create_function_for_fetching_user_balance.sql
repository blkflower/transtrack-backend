create or replace function compute_user_balance(user_id uuid) returns int as $$
  select sum(
    case when transaction_type = 'expense' 
    then (amount * -1) 
    else amount end) 
  from transactions
    where user_id = user_id
$$ language sql;