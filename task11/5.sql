SELECT name
FROM up_schema.user INNER JOIN up_schema.post
ON up_schema.post.user_id = up_schema.user.user_id
GROUP BY user.user_id
HAVING COUNT(post_id) > 3;
