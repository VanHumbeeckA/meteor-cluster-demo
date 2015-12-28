# meteor-cluster-demo

Recreated demo from meteorhacks:cluster package.
Based on [the meteorhacks:cluster tutorial video](https://www.youtube.com/watch?v=oudsAQZkvzQ&feature=youtu.be&t=15m27s).

## Demo 1: loadbalancing with cluster package

There are 2 identical loadbalancer meteor apps (normally, you only need 1. But for running on localhost, you cannot run them simultaniously on the same system). Run both apps on different ports.

On Windows, run the following commands (1 for each app).
Make sure you create a settings.json file (based on template) if you want to use an external mongodb.

```
set ROOT_URL=http://localhost:4000& meteor -p 4000 --settings settings.json
set ROOT_URL=http://localhost:5000& meteor -p 5000 --settings settings.json
```
