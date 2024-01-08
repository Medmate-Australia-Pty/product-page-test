# Project Setup
Run the following command from the root directory of this project.

```bash
mysql -u your_mysql_user -p < create_database_and_user.sql
```
Replace your_mysql_user with the actual MySQL user you want to use(ex root). Make sure create_database_and_user.sql contains the commands to create the database and user.

This script will create a new database user with name product_page and password product_page. And will also also setup permission for this user (If you dont want to create a seperate user for this project you can just create a database and put your credentials in .env file).

After running this script open .env file and make these changes to it.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=product_page
DB_USERNAME=product_page
DB_PASSWORD=product_page
```
## Laravel setup
```bash
composer install
php artisan migrate
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
          


## More

For api documentation 
```bash
https://app.swaggerhub.com/apis/TMAJMER/medMate-product_page-test/1.0.0
```

also postman collection can be found in project directory
```bash
MedMates.postman_collection.json
```

