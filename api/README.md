<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" /> <br />
	API
</h1>

## :rocket: Technology

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)
- [Docker](https://www.docker.com/docker-community)
- [Sequelize](http://docs.sequelizejs.com/)
- [node-postgres](https://www.npmjs.com/package/pg)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Yup](https://www.npmjs.com/package/yup)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)




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

### Delivery

Routes for ** order management **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /orders | `token JWT` | <code><span style="color:red">product</span></code>, <code><span style="color:red">recipient_id</span></code>, <code><span style="color:red">deliveryman_id</span></code> | Create Order | `{ id, product, deliveryman, recipient }` |
PUT | /orders/:id | `token JWT` e `id`: id referring to the recipient in the database |  <code><span style="color:red">product</span></code>, <code><span style="color:red">recipient_id</span></code>, <code><span style="color:red">deliveryman_id</span></code> | Edit Order | `{ id, product, deliveryman, recipient }` |
DELETE | /orders/:orderId/problems | `token JWT` e `orderId`: id referring to the recipient in the database | ❌ | Delete an order | `{ id, product, deliveryman, recipient }` |


### Deliveryman routes - JWT Token not required

### Delivery 

Routes for ** View Delivery **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /orders | ❌ | ❌ | List deliveries  | `{ order, recipient and deliveryman}` |
GET | /orders/:id | `id:` id referring to the order in the database | ❌ | List deliveries  | `{ order, recipient and deliveryman}` |

### Delivery Problems

Routes for ** order management **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /orders/problems/list | ❌ | ❌ | List deliveries with problem | `{ id, description, order_id }` |
POST | /orders/problems |  ❌ | <code><span style="color:red">description</span></code>, <code><span style="color:red">order_id</span></code> | Create Delivery Problem | `{ id, description, order_id }` |
GET | /orders/:orderId/problems | `orderId:` orderId referring to the recipient in the database | ❌ | List delivery with problem | `{ id, description, order_id }` |

### Deliveries Delivered

Routes for ** Deliveries Delivered **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /deliveryman/:id/deliveredorders | `id:` id referring to the recipient in the database | ❌ | List deliveries Delivered | `{ order, recipient and deliveryman}` |
PUT | /deliveryman/:id/deliveredorders |  `id:` id referring to the recipient in the database | <code><span style="color:red">orderId</span></code>, <code><span style="color:red">signature_id</span></code> | Ends delivery | `{ id, order  }` |

### Deliveries 

Routes for ** Deliveries management **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /deliveryman/:id/deliveries | `id:` id referring to the deliveryman in the database | ❌ | List deliveries  | `{ order, recipient and deliveryman}` |
PUT | /deliveryman/:id/deliveries |  `id:` id referring to the deliveryman in the database | <code><span style="color:red">order_id </span></code>, <code><span style="color:red">start_date</span></code> | Collect Delivery | `{ id, order  }` |

### Deliveryman

Routes for ** View Deliveryman **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /deliveryman/ | ❌ | ❌ | List deliverymen  | `{ [deliveryman] }` |
GET | /deliveryman/:id | `id:` id referring to the deliveryman in the database | ❌ | List deliveries  | `{ deliveryman }` |

### Recipients

Routes for ** View Recipients **

Method | URI | Parameters | Body | Description | Return |
-------|-----|:----------:|:----:|-----------|:-------:|
GET | /recipients | ❌ | ❌ | List recipients  | `{ [recipients] }` |
GET | /recipients/:id | `id:` id referring to the recipient in the database | ❌ | List recipient  | `{ recipient }` |