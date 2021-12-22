# safe-regexp-api

A simple api server to detect safe regex.

This api uses https://github.com/davisjam/safe-regex

## Run

```
$ node index.mjs
```

or using docker

```
$ docker run safe-regex-api:latest
```

## API

safe regexp

```
 curl -sSf -XPOST --data-urlencode 'regexp=[a-z]+' localhost:3000/is_safe_regexp
{"error":false,"is_safe":true}
```

evil regexp
```
$ curl -sSf -XPOST --data-urlencode 'regexp=(a+)+' localhost:3000/is_safe_regexp
{"error":false,"is_safe":false}
```

