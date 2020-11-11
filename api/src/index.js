const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const uuidv1 = require('uuid');


const port = 3000

class App {

  constructor(opts) {

    const pg = require('knex')({
      client: 'pg',
      version: '9.6',      
      searchPath: ['knex', 'public'],
      connection: process.env.PG_CONNECTION_STRING,
    });

    this.pg = pg;

    this.start = this.start.bind(this);
    this.initialiseTables = this.initialiseTables.bind(this);

    this.hasSetup = false;
    this.app = express();
    this.s = http.Server(this.app);


    const interval = setInterval(async () => {
      if(!this.hasSetup) {
        await this.initialiseTables(this.pg)
      }
      else {
        clearInterval(interval);

      }
    }, 1000)


  }
  async start() {
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true
      })
    );  
    this.app.get('/', async (req, res) => {
      const result = await this.pg
        .select('id')
        .from('tableExample')
      res.json({
          res: result
      });
    })

    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })

  }
  async initialiseTables(pg) {
    await pg.schema.hasTable('tableExample').then(async (exists) => {
      if (!exists) {
        await pg.schema
          .createTable('tableExample', (table) => {
            table.increments();
            table.uuid('uuid');
            table.string('title');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table tableExample');
            for (let i = 0; i < 10; i++) {
              const uuid = uuidv1();
              await pg.table('tableExample').insert({ uuid, title: `random element number ${i}` })
            }
          });
      }
    });
    this.hasSetup = true;
  }
}

new App().start();