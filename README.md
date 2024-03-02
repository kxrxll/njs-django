0. Turn on virtual envirenment:

```bash
cd backend && source venv/bin/activate
```

1. Install requirements:

```bash
pip3 install -r backend/requirements.txt
```

2. Make migrations:

```bash
python backend/manage.py makemigrations
```

3. Migrate:

```bash
python backend/manage.py migrate
```

4. Run Django server:

```bash
python backend/manage.py runserver
```

5. Run Next.js server:

```bash
cd frontend && npm i && npm run dev
```
