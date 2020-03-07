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
DELETE | /recipients/:id | `token JWT` e `id`: id referring to the recipient in the database | ❌ | Updates a recipient | `{ id, name, street, number, country, city, postcode }` |


### Deliverymen

Rotas para genrenciamento dos **entregadores**

Método | URI | Parâmetros | Body | Descrição | Retorno |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /deliverymen | `token JWT` | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Criar um entregador | `{ id, name, email }` |
PUT | /deliverymen/:id | `token JWT` e `id`: id referente ao entregador no banco de dados | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Editar um entregador | `{ id, name, email }` |

