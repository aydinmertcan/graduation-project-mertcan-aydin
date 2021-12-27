# Getir Node.js Bootcamp Graduation Project

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
- [TODO](#todo)
- [Contributing](#contributing)
- [License](#license)

## Installation

**For Mac :**

```
$ git clone <project_github_url_here>
$ cd <project_name>
$ npm install
$ create .env file, then fill it out
 - DB_URL=<mongo_uri>
 - PORT:3000

```

When the installation completes, open the _http://localhost:3000_`.

## Getting Started

For that project, we've only one endpoint which is `/api/v1/records`

- sample payload

```
  {
      "startDate" : "2016-01-01",
      "endDate": "2018-10-01",
      "minCount": 499,
      "maxCount": 500
  }
```

- sample response

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "UdVAhvel",
            "createdAt": "2016-10-29T01:57:38.537Z",
            "totalCount": 499
        }
    ]
}
```
