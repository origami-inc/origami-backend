# Awesome Project Build with TypeORM + Graphql

## Setup your dev environment:

1. Install and configure [Docker](https://www.docker.com/get-started) for your operating system;
2. Install [VS Code](https://code.visualstudio.com) or [VS Code Insiders](https://code.visualstudio.com/insiders);
3. install the VS Code extension [Remote - Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers);
4. Run **Remote-Containers: Reopen in container**;

Once inside container, the dependencies will be installed, the database will be ready to use and the migrations will run :tada:

You need to create a `.env` file on the root of project with the database information, like this:

```
DB_USER=postgres
DB_HOST=localhost
DB_PASSWORD=postgres
DB_NAME=postgres
NODE_ENV=development
```

Now you just type `yarn dev` on terminal and be happy coding :wink: