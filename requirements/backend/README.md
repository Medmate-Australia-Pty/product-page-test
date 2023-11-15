# Backend Task
 
## Description:
Your job is to create a simple API to retrieve information about a product.

## Installation & Setup
Before you begin developing, create a branch from master and name it `firstName_lastNameInitial`, e.g. `git checkout -b james_g` and publish the branch to the remote repo.
There are also some things to configure before developing:
- Ensure a minumum of php7.3 and maximum php8.0 is installed
- Run `composer install`
- Configure your db credentials inside the .env file. Note: `mysql` is our preferred db, if you do not have mysql, sqlite will suffice. Just make sure to update the `.env.example` so we know which database type to use.

## Requirements:
1. **Table & Relationships:**  
All columns must be created using Laravel migrations. The below schema is an outline of what the database may look like. Feel free to update or implement your own design. Refer to [Response & Structure](#response) to help with designing the database schema.  
    `products`  
    Relationships:
    - Has many images
    - Has one discount

    Columns
    - id (PK)
    - name (string)
    - description (text)
    - slug (string - unique)
    - price (integer)
    - active (boolean)
    - timestamps

    `product_images`  
    Relatipnships:
    - Belongs to one product

    Columns
    - id (PK)
    - product_id (FK)
    - path (string)
    - timestamps

    `product_discounts`  
    Relationships:
    - Belongs to one product

    Columns
    - id (PK)
    - product_id (FK)
    - type (enum "percent", "amount")
    - discount (integer)
    - timestamps
> ☨ This is a calculated value, not necessarily a column in a table.

2. <b id="response">Response Structure</b>  
The structure of the response is to be as follows:
```JSON
{
	"id": "1",
	"name": "Fall Limited Edition Sneakers",
	"description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "slug": "fall-limited-edition-sneakers",
	"price": {
        "full": 250,
		"discounted": 125
	},
	"discount": {
		"type": "percent",
		"amount": 50
	},
	"images": [
        "image-path-1.png", 
        "image-path-2.png",
        "image-path-3.png",
        "image-path-4.png"
    ]
}
```
3. **Authorisation:**  
All APIs should be protected by an authentication token.

4. **Validation and Error Handling:**  
Implement validation rules for a product. Return appropriate error responses/codes with meaningful error messages for invalid requests.

### Bonus
If you're up for the challenge you may implement a full CRUD solution for a given product. You may use the api you just built as the ***Read*** part of the crud feature.

## Need Clarification?
If you're having trouble interpreting the requirements please don't hesitate to email me at `james@medmate.com.au`

## Submission:
Once you have finalised the applicaiton, push the finished product to your branch (you may make as many commits as necessary). Create a pull request from your branch to base repository `Medmate-Australia-Pty/product_page_test` and base branch `master`. Please format the pull request name to be "Submission for <firstName_lastNameInitial>", e.g. "Submission for james_g".