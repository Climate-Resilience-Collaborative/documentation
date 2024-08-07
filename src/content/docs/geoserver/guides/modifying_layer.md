---
title: Managing Layers on Geoserver
description: How to add/modify/delete layers on Geoserver
author: Skyler Kimura
---

# Modifying Layer on Geoserver

## Changing Style

1. Click on "Layers" under "Data" on side navigation menu
2. Click on the layer that you would like to change the style
3. Click the "Publishing" tab
4. Change the "Default Style" select menu
5. Click save

## Creating Layer Groups on Geoserver

1. Click on "Layer Groups" under "Data" on the side navigation menu
2. Click on "Add new layer group"
3. Enter the name of the layer group
4. Enter the title of the layer group (can be the same as name)
5. Select "CRC" as the workspace
6. Click on "Generate Bounds"
7. Click on "Add Layer..."
8. In the "Choose new layer" modal window, select the desired layer that you would like to add to the layer group
9. Click on the style for the layer to change the layer
10. If you already assigned the correct style, you can click on the "Default Style" checkbox
11. If you would like to assign a different style, select the correct style for the "Choose alternate style" modal window
12. You can change the metadata as desired
13. Once you made all the change, click "Save" button

## Adding Layer Groups on Geoserver
1. Click on "Layer Groups" under "Data"
2. Select the layer group you would like to modify
3. Change the "Name" of the layer group if needed
4. Change the "Title" of the layer group if needed
5. Click on "Add Layer..."
6. Make sure to choose the correct style
7. Click "Save"

## Caching Layers
1. Click on "Layers" under "Data" on teh side navigation menu
2. Click the "Tile Caching" tab
3. Check the "create a cached layer for this layer"
4. Make sure the "image/png" checkbox is checked
5. Everything else can be left at the defaults

## Seeding Layer
1. Click on "Tile Layers" under "Tile Caching" in the navigation menu
2. Click the layer that you would like to start seeding into the cache
3. On the seeding form, you can change the "Number of tasks to use:" to utilize more cpu cores to speed up the caching process
4. Also, modify the "Zoom stop:" option to change the amount of zoom layers to cache (the more zoom layers, the slower)
5. Make sure the style is correct
6. Everything else can be left as default valeu
7. Click "Submit" button
