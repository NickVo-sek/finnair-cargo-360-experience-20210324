# Finnair Cargo 360 Exporience

## Dependencies

- Marzipano

## Dev Dependencies

- node
- npm

## Dev


#### Single build

```
$ npm start
```

#### Watch build

```
$ npm run dev
```

#### Start server
```
$ npm run server
```


#### Updating 360 images

1. Upload image(s) to http://www.marzipano.net/tool/index.html
2. Click export from top right and download zip file.
3. Extract zip and go to tiles-folder, copy panorama tiles to src/tiles.
4. Copy from data.js levels & faceSize values to MarzipanoCreator.js to corresponding areas in config.data
5. run
```
$ npm run copy-assets
```

## Deployment

### AWS S3 commands

#### Remove a file

To try, add `--dryrun` to the end

```
aws s3 rm s3://static-finnair-com/test/cargotest.html --profile=static-finnair-com-updater
aws s3 rm s3://static-finnair-com/cargo/cargo360/test.html --profile=static-finnair-com-updater
```


#### Remove a folder

To try, add `--dryrun` to the end

```
aws s3 rm s3://static-finnair-com/cargo/cargo360 --recursive --profile=static-finnair-com-updater
```



#### Copy file to s3

To try, add `--dryrun` to the end

```
aws s3 cp test.txt s3://static-finnair-com/cargo/cargo360 --profile=static-finnair-com-updater
```


#### Copy folder to s3

To try, add `--dryrun` to the end

```
aws s3 cp dist s3://static-finnair-com/cargo/cargo360 --recursive --profile=static-finnair-com-updater
```
