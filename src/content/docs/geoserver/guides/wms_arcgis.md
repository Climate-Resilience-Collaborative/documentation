---
title: Adding Map Layer From Web Mapping Service (WMS)
description: How to add layer from WMS Server in QGIS and ArcMap
author: Skyler Kimura
---

# Adding WMS Connection to QGIS

![QGIS](../../../../assets/geoserver/geoserver-02.png)
1. Right click "WMS/WMTS" option in Browser Panel
2. Select "New Connection..." in menu

![WMS Connection](../../../../assets/geoserver/geoserver-01.png)
3. Enter a name for WMS connection (Ex. crcgeo)
4. Enter "https://crcgeo.soest.hawaii.edu/geoserver/ows?version=1.3.0" as the URL for WMS connection
5. Click "Ok"

![Browser Panel](../../../../assets/geoserver/geoserver-03.png)
![Layer List](../../../../assets/geoserver/geoserver-04.png)
6. Layers served by the Geoserver will appear under the name of the connection
7. Double click any layer to add it to the map

# Adding WMS Connection to ArcMap Desktop

![ArcMap](../../../../assets/geoserver/geoserver-05.png)
1. In "Catalog" pane, click add WMS Server
2. Enter "https://crcgeo.soest.hawaii.edu/geoserver/ows?version=1.3.0" in URL input box

![Add connection dialogue](../../../../assets/geoserver/geoserver-06.png)
3. Test the connection by clicking "Get Layers" button
    - If connection is good, layers in geoserver will appear in "Server Layers" box
4. Click "Ok" button

![Add layer to ArcGIS](../../../../assets/geoserver/geoserver-08.png)
5. In "Catalog" pane, expand the WMS server option that you just added until the list of layers show up
6. Drag and drop layer in "Table of Contents" for it to appear on the map
