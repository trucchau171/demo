var APP_DATA = {
  "scenes": [
    {
      "id": "0-main",
      "name": "main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.2905434282203885,
        "pitch": 0.12115295743027943,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.572580963944315,
          "pitch": 0.06912102355915017,
          "rotation": 5.497787143782138,
          "target": "1-next1"
        },
        {
          "yaw": 0.5628681535406557,
          "pitch": 0.23810674327965842,
          "rotation": 0.7853981633974483,
          "target": "3-next3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.646280350009544,
          "pitch": -0.22736827275892146,
          "title": "Introduction",
          "text": "This is..."
        }
      ]
    },
    {
      "id": "1-next1",
      "name": "next1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8994107106375395,
          "pitch": 0.20074625797738044,
          "rotation": 0.7853981633974483,
          "target": "2-next2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-next2",
      "name": "next2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-next3",
      "name": "next3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6822472401973023,
          "pitch": 0.3999033406498409,
          "rotation": 0,
          "target": "4-next4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-next4",
      "name": "next4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
