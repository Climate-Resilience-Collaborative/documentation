---
title: Records
description: Explains record fields and how to create record 
---


![UID Tool](../../../../../assets/uid-tool/uid-tool-15.png)

### Field Definitions
![Record Fields](../../../../../assets/uid-tool/uid-tool-10.png)
 - Dataset Name: Name of the dataset
 - Created: Date and time dataset has been inputted into the UID Tool
 - Creator: Email, First and Last Name of User who curated the data
 - Location Type: The location medium type that the data has been stored
 - Invenio: Is the dataset stored in Invenio?
 - Project 1: The primary projece that the data is associated with (List of projects on project page)
 - Project 2: The secondary project that the data is associated with (List of projects on project page)
 - UID: The unique identity associated with CRC for the data
 - Description: Additional metadata for the dataset name
 - Location: The exact location that the dataset is stored
 - DOWNLOAD DATA README: Button to download a README in txt format that includes all of the information inputted into the UID tool


## <a href="https://coastal5.soest.hawaii.edu/uid-tool/data/create" target="_blank">How to Curate Record in UID Tool?</a>


### 1. Type in name that is associated to the dataset
![Step 1 screenshot](https://images.tango.us/workflows/05431739-3d8c-4eb7-bd18-c650fe19d1e1/steps/82214b54-6388-4463-95c9-e3d7709522f8/f5b021a0-cd78-448c-acd4-d8aed2c6b4bb.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.1779&fp-z=1.9237&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=346&mark-y=235&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDcmaD04NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 2. Select a project from Project 1
![Step 2 screenshot](../../../../../assets/uid-tool/uid-tool-03.png)
- The dropdown will be populated by the projects that you are assigned
- To see the list of all projects, you can view the projects [here](/crc-documentation/data-management/uid-tool/guides/projects/)
- If you need to access to another project, please email skyler8@hawaii.edu or mbarbee@hawaii.edu
- Dataset needs to have at least one associated project. If there's not a specific project associated to the dataset, choose General Data.


### 3. (If needed) Select project from Project 2
![Step 3 screenshot](../../../../../assets/uid-tool/uid-tool-04.png)
- The project 2 dropdown will be also populated by the projects that you are assigned
- Please be sure to select a different project, or this field will default to a blank "N/A" project
- Data may be associated to two project. If not, please leave project 2 as the first option "Pick one (if needed)" this will default to a blank "N/A" project


### 4. Choose where you plan on storing data
![Step 4 screenshot](../../../../../assets/uid-tool/uid-tool-02.png)
Note: This field is only a note for the location of your dataset that will be stored in a database. It is preferrable to store data on coastal6 and keep any copy or backup in local storage
- Locally Stored
    - Locally storing dataset includes storing on computer hard drive, external hard drive, or USB drive. Anything that doesn't require network access.
- Coastal6 (soon to be KoaCloud)
    - Storing dataset on coastal6 network drive is the prefered storage medium. Storing datasets in CRC network drive, coastal6, requires user to be connected to the SOEST network. 
- Other
    - Other storage methods includes, but not limited to Google Drive, FTP, imina, and koa long term storage.


### 5. Type in the location of the dataset
![Step 5 screenshot](https://images.tango.us/workflows/05431739-3d8c-4eb7-bd18-c650fe19d1e1/steps/00c06cbe-cbd7-472a-bf47-3a2f47955ba5/dc701c2c-425a-4d2a-a9e8-3e308ef7009a.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5257&fp-z=1.9237&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=346&mark-y=364&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDcmaD04NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- For each storage medium, type in the **FULL** location of the dataset in a readable format. There are examples of the format depending on the storage medium
- Locally Stored
    - Format: D:\Local\Stored
- Coastal6
    - Format: /Data/example/example.zip
- Other
    - Format: Device:/path/dataset.zip 
        - Google-Drive:/Data/Example/Example.zip
        - koa:/Shared-Storage/skyler/vector_db.zip
        - imina.soest.hawaii.edu:/htdocs/index.html


### 6. Type description of the dataset
![Step 6 screenshot](https://images.tango.us/workflows/05431739-3d8c-4eb7-bd18-c650fe19d1e1/steps/33c9b547-80ae-4a98-b8c1-3ca1d31f1d1a/006e48e2-83bb-408e-8d89-4f762ebcfdac.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6640&fp-z=1.9237&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=346&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDcmaD0xNjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
- The description will additional metadata. Please enter include type of file, geolocation that represents the dataset, and the relavent date (MM/DD/YYYY) associated to the dataset if applicable.

### 7. Check/Uncheck checkmark next to "Planning on publishing to Zenodo"?…
![Step 7 screenshot](https://images.tango.us/workflows/05431739-3d8c-4eb7-bd18-c650fe19d1e1/steps/42ffd2b4-daf6-44b8-bcef-78c1d95f7213/912aec98-6aab-41e5-84ec-55423c6e5d02.png?crop=focalpoint&fit=crop&fp-x=0.5965&fp-y=0.7628&fp-z=3.1109&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=560&mark-y=367&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04MCZoPTgwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)
- Check yes if...
    - The data is already published on Zenodo
    - You plan on publishing on to Zenodo
- Don't check yes if...
    - The data will not be published on Zenodo


### 8. Click on Submit Button
![Step 8 screenshot](https://images.tango.us/workflows/05431739-3d8c-4eb7-bd18-c650fe19d1e1/steps/08f43266-8aa5-4ccc-9232-50e83d0dfc7b/5028d90d-ef69-4b55-b9ab-e918e2bf0c24.png?crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.8730&fp-z=1.9362&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=349&mark-y=571&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDMmaD04NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- When information in the form is ready to be submitted, click the submit button. 
- Above the submit button, there will be text that will validate if the record can be submitted
- If record cannot be created, red text with an error will display and the submit button will be disabled until the form error is fixed
- If record can be created, green text will dislay and the submit button will be clickable

### 9. Download README will start
![Download Countdown](../../../../../assets/uid-tool/uid-tool-05.png)
- After submitting the data curation form, a download counter will start
![Store README File](../../../../../assets/uid-tool/uid-tool-16.png)
- A dialog asking to save your data will pop up
- Store the README.txt as {name of dataset}_README.txt in the same location as your dataset for documentation purposes
- Ex. example_dataset_README.txt
![README Content](../../../../../assets/uid-tool/uid-tool-07.png)
- The README.txt file will hold the information that you just submitted

<br/>