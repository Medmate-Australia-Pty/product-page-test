# Project Setup
Run the following command from the root directory of this project

```bash
mysql -u your_mysql_user -p < create_database_and_user.sql
```
Replace your_mysql_user with the actual MySQL user you want to use. Make sure create_database_and_user.sql contains the commands to create the database and user.

```bash
composer install
php artisan serve
```

# Laravel Routes Documentation

Postman collection json(MedMates.postman_collection.json) is included with this project use it for making call on this server

## To generate token 
- **POST**   api/users                     
- **PUT**    api/users 


## To Retrieve and Access Data
## Authentication

- For all routes under `api/*`, users must include an Authorization token in the headers. generated from 
    ## To generate token 
    - **POST**   api/users (with new Username and Password)                    
    - **PUT**    api/users (For existing Username and password )

- **Header**: `Authorization: Bearer [YourTokenHere]`

- **GET**    api/discounts                 
- **POST**   api/discounts                 
- **GET**    api/discounts/history/{id}    
- **GET**    api/photo/{id}                
- **POST**   api/photos                    
- **GET**    api/photos                    
- **DELETE** api/photos/{id}               
- **GET**    api/product_images/{filename}
- **GET**    api/products                  
- **POST**   api/products                  
- **GET**    api/products/{id}             
- **PUT**    api/products/{id}             
- **DELETE** api/products/{id}             
- **GET**    api/user                      
                    
- **GET**    client/products/{slug}        
          

