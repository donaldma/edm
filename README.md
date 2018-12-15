# svdden
Less bootstrapping, more coding

## Dependencies
- Node
- Git
- Postgresql
- Knex

## Setup
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
git clone git@github.com:donaldma/svdden.git && cd svdden
npm install
npm run bootstrap
git remote add origin [your gtihub repo remote] (ex. git remote add origin git@github.com:donaldma/svdden.git)
```
Feel free to change the app name in client/package.json[name]

### Start Coding!
```
npm run app
```