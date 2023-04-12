# Test with environment variables

| Method             | Substitution (Client) | Substitution (Server) |
| ------------------ | --------------------- | --------------------- |
| NODE_ENV           | Build                 | Build                 |
| NEXT_PUBLIC_*      | Build                 | Build                 |
| Any other variable | undefined             | Runtime               |
| Based on URL       | Runtime               | undefined             |

