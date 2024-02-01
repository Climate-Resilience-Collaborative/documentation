---
title: Accessing KoaCloud
description: How to access KoaCloud guide 
author: Skyler Kimura
---

## Getting Access to CRC Shared Drive on KoaCloud
**READ BEFORE MOVING ON**<br>
If this is your first time using Koa Cloud, you will need to get your UH account setup with KoaCloud.
1. Go to https://koacloud.its.hawaii.edu
![UH Authentication](../../../../../assets/koacloud/koacloud-02.png)
2. Log in with your UH Username and Password
3. Email skyler8@hawaii.edu or mbarbee@hawaii.edu to that you setup your account on KoaCloud, so they can grant access to CRC shared drive

There are two ways to access and use KoaCloud:
- web interface
- sync client

## Web Interface
![KoaCloud Web Interface](../../../../../assets/koacloud/koacloud-01.png)

* Going to https://koacloud.its.hawaii.edu/ will direct you to the web interface
* You can manage files and upload new files to KoaCloud through this interface
* There are other features that the web interface provides


## Sync Client (Mountable Drive)
UH ITS made a guide on how to install the sync client over [here](https://uhawaii.atlassian.net/wiki/spaces/RStorage/pages/452460690/Sync+Client)<br> 

For CRC's KoaCloud directory, there are specific configurations that we recommend


### Syncing with user directory 

- When it comes to configuring your folder sync option, **DO NOT SELECT THE FIRST OPTION** (Synchronize everything from server)<br>
- Please select the second option, where you get to choose what to sync.
![KoaCloud Client Configuration](../../../../../assets/koacloud/koacloud-05.png)

- In the "Users" directory, you will find a directory named with your UH username. Please select only that folder to sync.<br>
- If you cannot find a directory with your UH username, please email skyler8@hawaii.edu or mbarbee@hawaii.edu.<br>
- Once you have selected **only** the directory named with your UH username, click "OK".<br>
![KoaCloud Sync Folder](../../../../../assets/koacloud/koacloud-06.png)


- After choosing your user directory, the folder configuration window will show the amount of space your user directory will take up.
- The amount of free space in your Local Folder is shown as well
- This syncing method will download everything in your CRC KoaCloud user directory into your Local Folder.
![Local Folder](../../../../../assets/koacloud/koacloud-15.png)

- You may want to change the "Local Folder" to be on a different hard drive and/or you may want change the name of the "Local Folder"
- Click on "Choose different folder"
![Choose different folder](../../../../../assets/koacloud/koacloud-16.png)

- In the directory dialog, select a folder on your computer that has sufficient space. Choosing a folder within an external hard drive is recommeneded.
- You can also name the folder anything you want as long as you can remember what it holds.
- After choosing/naming the folder that will hold your KoaCloud user directory, click "Select Folder"
![directory dialog](../../../../../assets/koacloud/koacloud-17.png)

- Once your folder configuration looks good, you can click "Connect"
![KoaCloud Folder Configuartion Connect](../../../../../assets/koacloud/koacloud-18.png)

Now you are done syncing with your CRC KoaCloud user directory, you will have to access the other CRC directories with a different method<br>
Since the other CRC directories will have **well over 100 GB** of files, you do not want to download a copy of everything (which is what the above method does).<br>

You can either:
- Access the files in the web interface (similar to using Google Drives web interface)
- You can also locally mount the directory with virtual files
    - Virtual files are copies of the file that represent what is inside KoaCloud, but do not take up any space (similar to Google Drives desktop application)

### Sync with other CRC KoaCloud directory (virtual files)
- Open NextCloud sync client window
![Windows Open NextCloud pt 1](../../../../../assets/koacloud/koacloud-07.png)
- Click on your username on the NextCloud Window
![NextCloud Username](../../../../../assets/koacloud/koacloud-08.png)
- Click on "Settings" in the dropdown menu
![Settings Dropdown](../../../../../assets/koacloud/koacloud-09.png)
- Click on "Add Folder Sync Connection"
![Add Folder Sync Connection](../../../../../assets/koacloud/koacloud-10.png)
- Enter the path on your local machine that you would like to access this "virtual" directory and then click "Next"
![Choose path for virtual files](../../../../../assets/koacloud/koacloud-11.png)
- Select the folder on KoaCloud that you would like to sync virtually
![Choose foler that you would like to sync virutally](../../../../../assets/koacloud/koacloud-12.png)
- Be sure to check the "Use virtual files instead of downloading content immediately" checkbox
![virtual files checkbox](../../../../../assets/koacloud/koacloud-13.png)
- To complete connection click "Add Sync Connection"
![finish virtual sync](../../../../../assets/koacloud/koacloud-14.png)


