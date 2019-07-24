import os
import json

def main():
    with open('Countries.json', 'r') as target:
        datastore = json.load(target)
        x = datastore['items'][0]
        GetCountry(x)
        #for i in datastore["items"]:
        #    print(GetBuilding(i['Description']))

def GetCountry(desc):
    print(desc)

def GetBuilding(building):
    building = building.split('Building:')
    building = building[1]
    building = building.split('<')
    outputone = building[0].strip()
    return outputone

if __name__ == "__main__":
    main()
