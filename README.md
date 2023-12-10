1. Install requirements:

```bash
pip3 install -r backend/requirements.txt
```

2. Make migrations:

```bash
python3 backend/manage.py makemigrations
```

3. Migrate:

```bash
python3 backend/manage.py migrate
```

4. Run Django server:

```bash
python3 backend/manage.py runserver
```

5. Run Next.js server:

```bash
cd frontend && npm i && npm run dev
```
