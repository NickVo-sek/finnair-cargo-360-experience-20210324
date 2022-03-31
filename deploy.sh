#!/bin/bash

function build {
 echo "Build"
 # Build source
 npm start
}

function dryrun {
 echo "Dryrun"
 # Dryrun
 aws s3 rm s3://static-finnair-com/cargo/coolterminal360/ --recursive --profile=static-finnair-com-updater --dryrun
 aws s3 cp dist s3://static-finnair-com/cargo/coolterminal360/ --recursive --profile=static-finnair-com-updater --dryrun
}

function prod {
 echo "New Production Deploy"
 # The real deal
 aws s3 rm s3://static-finnair-com/cargo/coolterminal360/ --recursive --profile=static-finnair-com-updater
 aws s3 cp dist s3://static-finnair-com/cargo/coolterminal360/ --recursive --profile=static-finnair-com-updater
}

function staging {
 echo "New Staging Deploy"
 # The real deal
 aws s3 rm s3://static-finnair-com/cargo/coolterminal360-staging/ --recursive --profile=static-finnair-com-updater
 aws s3 cp dist s3://static-finnair-com/cargo/coolterminal360-staging/ --recursive --profile=static-finnair-com-updater
}

echo "What do you want to do?"
select yn in "Dryrun" "Staging" "Production" "Cancel"; do
    case $yn in
        Dryrun ) dryrun; break;;
        Staging ) build; staging; break;;
        Production ) build; prod; break;;
        Cancel ) echo "Cancelled"; exit;;
    esac
done
