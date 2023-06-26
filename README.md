# Simple NEST x Prisma app

## Prerequisites
You need Postgres database to proceed provide your credits in `.env` file in a format as `.env.example` describes.  
Make sure your user has `CREATEDB` role.  
## Run

Install dependencies  
```
npm install
```

Prisma code generate
```
npx prisma generate
```

Migrate database
```
npx prisma migrate dev
```
Start  
```
npm run start:dev
```
