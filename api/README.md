<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src="../.github/LogoFastFeetGoStack.png" width="300px" /> <br />
	API
</h1>



## Routes


### Sessions

Used for admin authentication only:

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /sessions | ❌ | <code><span style="color:red">email</span></code> e <code><span style="color:red">password</span></code> | Generates a JWT token. | `{ user: { id, name }, token }` |

### Files

Route for sending image file.

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /files | Via Multipart Form: `file` | ❌ | Route to send an image | `{ id, url, name, path, createdAt, updatedAt }` |

### Admin routes: Requires JWT Token

>For all of the following routes, ** the jwt token ** must be sent. In the format <code style="color:red">Bearer TOKEN</code>

### Recipients

Routes for managing the ** recipients **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /recipients | `token JWT` | <code><span style="color:red">name</span></code>, <code><span style="color:red">street</span></code>, <code><span style="color:red">number</span></code>, <code><span style="color:red">city</span></code>, <code><span style="color:red">country</span></code> e <code><span style="color:red">postcode</span></code> | Create a recipient | `{ id, name, street, number, country, city, postcode }` |
PUT | /recipients/:id | `token JWT` e `id`: id referring to the recipient in the database | <code><span style="color:red">name</span></code>, <code><span style="color:red">street</span></code>, <code><span style="color:red">number</span></code>, <code><span style="color:red">country</span></code>, <code><span style="color:red">city</span></code> e <code><span style="color:red">postcode</span></code> | Updates a recipient | `{ id, name, street, number, country, city, postcode }` |
DELETE | /recipients/:id | `token JWT` e `id`: id referring to the recipient in the database | ❌ | Delete a recipient | `{ id, name, street, number, country, city, postcode }` |


### Deliveryman

** Delivery Managers ** Routes

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /deliveryman | `token JWT` | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Create Delivery Man | `{ id, name, email }` |
PUT | /deliveryman/:id | `token JWT` e `id`: id referring to the recipient in the database | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Edit Delivery Man | `{ id, name, email }` |
DELETE | /deliverymen/:id | `token JWT` e `id`: id referring to the recipient in the database | ❌ | Delete a deliveryman | `{ id, name, email }` |

### Orders

Routes for ** order management **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /orders | `token JWT` | <code><span style="color:red">product</span></code>, <code><span style="color:red">recipient_id</span></code>, <code><span style="color:red">deliveryman_id</span></code> | Create Order | `{ id, product, deliveryman, recipient }` |
PUT | /orders/:id | `token JWT` e `id`: id referring to the recipient in the database |  <code><span style="color:red">product</span></code>, <code><span style="color:red">recipient_id</span></code>, <code><span style="color:red">deliveryman_id</span></code> | Edit Order | `{ id, product, deliveryman, recipient }` |
DELETE | /orders/:id | `token JWT` e `id`: id referring to the recipient in the database | ❌ | Delete a deliveryman | `{ id, product, deliveryman, recipient }` |