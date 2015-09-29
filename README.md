# REST API
REST API with Node JS, Express JS &amp; Mongo DB

## Demo

ALL Authors:
```
GET http://localhost:8000/api/authors/
```
Create Author:
```
POST http://localhost:8000/api/authors/
```
Single Author:
```
GET http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Update Single Author:
```
PUT http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Delete Single Author:
```
DELETE http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Search any field ( exact match )
```
GET http://localhost:8000/api/authors/?location=Bangalore
```

Search any field containing text ( + exact match )
```
GET http://localhost:8000/api/authors/?location=hy
```


