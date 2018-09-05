TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
       "yaw": 7.53,
       "backwardYaw": -169.35,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
          "yaw": 6.69,
          "backwardYaw": -171.17,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
                "yaw": -3.95,
                "backwardYaw": 171.63,
                "distance": 1
               }
              ],
              "mapLocations": [
               {
                "x": 12.04,
                "y": 370,
                "class": "PanoramaMapLocation",
                "angle": 59.47,
                "map": {
                 "class": "Map",
                 "width": 1058,
                 "id": "map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4",
                 "fieldOfViewOverlayOutsideOpacity": 0,
                 "height": 442,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 442,
                    "class": "ImageResourceLevel",
                    "width": 1058,
                    "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4.png"
                   },
                   {
                    "height": 221,
                    "class": "ImageResourceLevel",
                    "grayscale": true,
                    "width": 529,
                    "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_lq.png"
                   }
                  ]
                 },
                 "fieldOfViewOverlayInsideOpacity": 0.4,
                 "fieldOfViewOverlayOutsideColor": "#000000",
                 "fieldOfViewOverlayInsideColor": "#0000FF",
                 "label": "Siglo XIX ",
                 "overlays": [
                  {
                   "rollOverDisplay": false,
                   "id": "overlay_B709D1B1_A5E7_73AA_41C6_B85AEB603FD2",
                   "map": {
                    "offsetY": 0,
                    "x": 907.71,
                    "width": 51.73,
                    "y": 88.64,
                    "height": 52.79,
                    "class": "HotspotMapOverlayMap",
                    "offsetX": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 26,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_0_map.gif"
                      }
                     ]
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "image": {
                    "height": 52.79,
                    "x": 907.63,
                    "y": 88.54,
                    "width": 51.73,
                    "class": "HotspotMapOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 52,
                       "class": "ImageResourceLevel",
                       "width": 51,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_0.png"
                      }
                     ]
                    }
                   },
                   "areas": [
                    {
                     "toolTip": "ir al lugar",
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 0)"
                    }
                   ],
                   "useHandCursor": true
                  },
                  {
                   "rollOverDisplay": false,
                   "id": "overlay_B734A0EB_A5E6_B1BD_41E2_FB6632C166C5",
                   "map": {
                    "offsetY": 0,
                    "x": 504.94,
                    "width": 54.03,
                    "y": 161.32,
                    "height": 56.49,
                    "class": "HotspotMapOverlayMap",
                    "offsetX": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 28,
                       "class": "ImageResourceLevel",
                       "width": 27,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_1_map.gif"
                      }
                     ]
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "image": {
                    "height": 56.49,
                    "x": 504.87,
                    "y": 161.29,
                    "width": 54.03,
                    "class": "HotspotMapOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 54,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_1.png"
                      }
                     ]
                    }
                   },
                   "areas": [
                    {
                     "toolTip": "ir al lugar",
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 1)"
                    }
                   ],
                   "useHandCursor": true
                  },
                  {
                   "rollOverDisplay": false,
                   "id": "overlay_B64FA631_A5E5_B0AD_41D6_94770AD9B44C",
                   "map": {
                    "offsetY": 0,
                    "x": 183.26,
                    "width": 50.33,
                    "y": 232.04,
                    "height": 49.1,
                    "class": "HotspotMapOverlayMap",
                    "offsetX": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 24,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_2_map.gif"
                      }
                     ]
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "image": {
                    "height": 49.1,
                    "x": 183.15,
                    "y": 231.99,
                    "width": 50.33,
                    "class": "HotspotMapOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 49,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_2.png"
                      }
                     ]
                    }
                   },
                   "areas": [
                    {
                     "toolTip": "ir al lugar",
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 2)"
                    }
                   ],
                   "useHandCursor": true
                  },
                  {
                   "rollOverDisplay": false,
                   "id": "overlay_B716498A_A5E2_F07F_41BE_68EA0FBE726F",
                   "map": {
                    "offsetY": 0,
                    "x": 49.12,
                    "width": 50.71,
                    "y": 310.36,
                    "height": 46.24,
                    "class": "HotspotMapOverlayMap",
                    "offsetX": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 23,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_3_map.gif"
                      }
                     ]
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "image": {
                    "height": 46.24,
                    "x": 49.01,
                    "y": 310.28,
                    "width": 50.71,
                    "class": "HotspotMapOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 46,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_3.png"
                      }
                     ]
                    }
                   },
                   "areas": [
                    {
                     "toolTip": "ir al lugar",
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 3)"
                    }
                   ],
                   "useHandCursor": true
                  },
                  {
                   "rollOverDisplay": false,
                   "id": "overlay_B645B813_A5E3_B06E_41E1_1A1D7B512F99",
                   "map": {
                    "offsetY": 0,
                    "x": -7.26,
                    "width": 38.43,
                    "y": 348.31,
                    "height": 43.45,
                    "class": "HotspotMapOverlayMap",
                    "offsetX": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 21,
                       "class": "ImageResourceLevel",
                       "width": 19,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_4_map.gif"
                      }
                     ]
                    }
                   },
                   "class": "AreaHotspotMapOverlay",
                   "image": {
                    "height": 43.45,
                    "x": -7.17,
                    "y": 348.28,
                    "width": 38.43,
                    "class": "HotspotMapOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 38,
                       "url": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_HS_4.png"
                      }
                     ]
                    }
                   },
                   "areas": [
                    {
                     "toolTip": "ir al lugar",
                     "class": "HotspotMapOverlayArea",
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 4)"
                    }
                   ],
                   "useHandCursor": true
                  }
                 ],
                 "maximumZoomFactor": 1.2,
                 "thumbnailUrl": "media/map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4_t.png",
                 "scaleMode": "fit_inside",
                 "initialZoomFactor": 1,
                 "fieldOfViewOverlayRadiusScale": 0.1,
                 "minimumZoomFactor": 0.5
                }
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "cardboardMenu": {
               "fontFamily": "Arial",
               "rollOverFontColor": "#FFFFFF",
               "label": "Media",
               "backgroundColor": "#404040",
               "rollOverBackgroundColor": "#000000",
               "fontColor": "#FFFFFF",
               "selectedFontColor": "#FFFFFF",
               "id": "Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
               "selectedBackgroundColor": "#202020",
               "rollOverOpacity": 0.8,
               "class": "Menu",
               "children": [
                {
                 "class": "MenuItem",
                 "label": "1 -XIX",
                 "click": "this.mainPlayList.set('selectedIndex', 0)"
                },
                {
                 "class": "MenuItem",
                 "label": "2-XIX",
                 "click": "this.mainPlayList.set('selectedIndex', 1)"
                },
                {
                 "class": "MenuItem",
                 "label": "3-XIX",
                 "click": "this.mainPlayList.set('selectedIndex', 2)"
                },
                {
                 "class": "MenuItem",
                 "label": "4-XIX",
                 "click": "this.mainPlayList.set('selectedIndex', 3)"
                },
                {
                 "class": "MenuItem",
                 "label": "5-XIX",
                 "click": "this.mainPlayList.set('selectedIndex', 4)"
                },
                {
                 "class": "MenuItem",
                 "label": "1-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 5)"
                },
                {
                 "class": "MenuItem",
                 "label": "2-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 6)"
                },
                {
                 "class": "MenuItem",
                 "label": "3-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 7)"
                },
                {
                 "class": "MenuItem",
                 "label": "4-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 8)"
                },
                {
                 "class": "MenuItem",
                 "label": "5-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 9)"
                },
                {
                 "class": "MenuItem",
                 "label": "6-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 10)"
                },
                {
                 "class": "MenuItem",
                 "label": "7-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 11)"
                },
                {
                 "class": "MenuItem",
                 "label": "8-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 12)"
                },
                {
                 "class": "MenuItem",
                 "label": "9-1902",
                 "click": "this.mainPlayList.set('selectedIndex', 13)"
                },
                {
                 "class": "MenuItem",
                 "label": "1-1909",
                 "click": "this.mainPlayList.set('selectedIndex', 14)"
                },
                {
                 "class": "MenuItem",
                 "label": "2-1909",
                 "click": "this.mainPlayList.set('selectedIndex', 15)"
                },
                {
                 "class": "MenuItem",
                 "label": "3-1909",
                 "click": "this.mainPlayList.set('selectedIndex', 16)"
                },
                {
                 "class": "MenuItem",
                 "label": "4-1909",
                 "click": "this.mainPlayList.set('selectedIndex', 17)"
                },
                {
                 "class": "MenuItem",
                 "label": "5-1909",
                 "click": "this.mainPlayList.set('selectedIndex', 18)"
                },
                {
                 "class": "MenuItem",
                 "label": "1-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 19)"
                },
                {
                 "class": "MenuItem",
                 "label": "2-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 20)"
                },
                {
                 "class": "MenuItem",
                 "label": "3-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 21)"
                },
                {
                 "class": "MenuItem",
                 "label": "4-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 22)"
                },
                {
                 "class": "MenuItem",
                 "label": "5-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 23)"
                },
                {
                 "class": "MenuItem",
                 "label": "6-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 24)"
                },
                {
                 "class": "MenuItem",
                 "label": "7-1930",
                 "click": "this.mainPlayList.set('selectedIndex', 25)"
                },
                {
                 "class": "MenuItem",
                 "label": "1-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 26)"
                },
                {
                 "class": "MenuItem",
                 "label": "2-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 27)"
                },
                {
                 "class": "MenuItem",
                 "label": "3-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 28)"
                },
                {
                 "class": "MenuItem",
                 "label": "4-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 29)"
                },
                {
                 "class": "MenuItem",
                 "label": "5-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 30)"
                },
                {
                 "class": "MenuItem",
                 "label": "6-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 31)"
                },
                {
                 "class": "MenuItem",
                 "label": "7-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 32)"
                },
                {
                 "class": "MenuItem",
                 "label": "8-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 33)"
                },
                {
                 "class": "MenuItem",
                 "label": "9-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 34)"
                },
                {
                 "class": "MenuItem",
                 "label": "10-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 35)"
                },
                {
                 "class": "MenuItem",
                 "label": "11-2018",
                 "click": "this.mainPlayList.set('selectedIndex', 36)"
                }
               ],
               "opacity": 0.4
              },
              "label": "5-XIX",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 4.2,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -3.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 32,
                       "class": "ImageResourceLevel",
                       "width": 35,
                       "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.47
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_80653A3A_A662_909F_41D7_C5B047190DE3",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_B1BE5292_A9EB_F1D0_41CE_6AC0FB0E34AB); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.2,
                    "yaw": -3.95,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 65,
                       "class": "ImageResourceLevel",
                       "width": 70,
                       "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -5.47
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3000,
                   "class": "ImageResourceLevel",
                   "width": 6000,
                   "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 171.63,
             "backwardYaw": -3.95,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
             "yaw": 3.88,
             "backwardYaw": 176.72,
             "distance": 1
            }
           ],
           "mapLocations": [
            {
             "x": 74.36,
             "y": 333.4,
             "class": "PanoramaMapLocation",
             "angle": 59.86,
             "map": "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4"
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
           "label": "4-XIX",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 8.08,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 171.63,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 64,
                    "class": "ImageResourceLevel",
                    "width": 67,
                    "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 1.79
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_83B47D43_A667_90ED_41DA_6EF985FABBC0",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD, this.camera_B14A5E27_A9EB_D0F0_41CC_272F9F71F0A1); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 8.08,
                 "yaw": 171.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 129,
                    "class": "ImageResourceLevel",
                    "width": 134,
                    "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": 1.79
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 4.41,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 3.88,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 33,
                    "class": "ImageResourceLevel",
                    "width": 36,
                    "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -5.06
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_83CF9192_A666_906F_41E0_C42078471C78",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6, this.camera_B137EE38_A9EB_D0D0_41E1_5DD8B18BBD24); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 4.41,
                 "yaw": 3.88,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 67,
                    "class": "ImageResourceLevel",
                    "width": 73,
                    "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -5.06
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3000,
                "class": "ImageResourceLevel",
                "width": 6000,
                "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 176.72,
          "backwardYaw": 3.88,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 208.31,
          "y": 256.54,
          "class": "PanoramaMapLocation",
          "angle": 75.43,
          "map": "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4"
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
        "label": "3-XIX",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 5.02,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 6.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 44,
                 "class": "ImageResourceLevel",
                 "width": 42,
                 "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -6
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_83246A0A_A665_B07F_41C1_C91008B3481C",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17, this.camera_B00440EC_A9EB_F171_41D0_96158CB4FBEB); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 5.02,
              "yaw": 6.69,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 89,
                 "class": "ImageResourceLevel",
                 "width": 84,
                 "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -6
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 5.13,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 176.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 42,
                 "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": 0.43
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_8127F353_A666_B0ED_41E0_0B1B6CAEC2BF",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_B009C109_A9EB_F0B3_41CF_502206784BCE); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 5.13,
              "yaw": 176.72,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 77,
                 "class": "ImageResourceLevel",
                 "width": 85,
                 "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_3_0.png"
                }
               ]
              },
              "pitch": 0.43
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -171.17,
       "backwardYaw": 6.69,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 531.89,
       "y": 189.53,
       "class": "PanoramaMapLocation",
       "angle": 78.69,
       "map": "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "2-XIX",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 6.13,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 7.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "class": "ImageResourceLevel",
              "width": 51,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 4.88
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_833E05DA_A663_B39E_41D4_3739DD054D5D",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9, this.camera_B1462E00_A9EB_D0B0_41AA_914269F625A0); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 6.13,
           "yaw": 7.53,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "class": "ImageResourceLevel",
              "width": 102,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 4.88
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 5.66,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -171.17,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 44,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -6.33
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_830251E3_A662_93AD_41DD_FB6579C02A8C",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6, this.camera_B1405E13_A9EB_D0D0_41E3_1F4CD2D209FE); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "hfov": 5.66,
           "yaw": -171.17,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 88,
              "class": "ImageResourceLevel",
              "width": 94,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -6.33
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -169.35,
    "backwardYaw": 7.53,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 933.49,
    "y": 114.94,
    "class": "PanoramaMapLocation",
    "angle": 71.72,
    "map": "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "1 -XIX",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "bleachingDistance": 0.32,
      "id": "overlay_82462A7D_A66F_9095_41CB_49C54D51C6E8",
      "bleaching": 0.66,
      "class": "LensFlarePanoramaOverlay",
      "yaw": -10.44,
      "pitch": 86.31
     },
     {
      "maps": [
       {
        "hfov": 6.18,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -169.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 51,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.02
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_82891867_A66D_70B5_41E1_36934F368BED",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17, this.camera_B01260D0_A9EB_F151_41E2_73F3AA9C7AC9); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 6.18,
        "yaw": -169.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 103,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -7.02
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.92,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 8.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.08
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_8127CA61_A666_B0AD_41CC_9273A2724AA0",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "toolTip": "modelo 3D",
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_9D9B077E_9076_2021_41CC_D28EC763E3D2, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 4.92,
        "yaw": 8.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 81,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 2.08
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "maxHeight": 26,
   "toolTipTextShadowBlurRadius": 3,
   "paddingRight": 0,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingRight": 6,
   "width": 44,
   "height": 32,
   "mode": "push",
   "borderSize": 0,
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "toolTip": "modo VR",
   "transparencyActive": false,
   "paddingLeft": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "shadow": false,
   "toolTipShadowColor": "#333333",
   "cursor": "hand",
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "id": "IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4",
   "maxWidth": 38,
   "toolTipShadowVerticalLength": 0,
   "paddingTop": 0,
   "minWidth": 1,
   "borderRadius": 0,
   "toolTipOpacity": 1,
   "iconURL": "skin/IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4.png",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipShadowSpread": 0,
   "backgroundOpacity": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowBlurRadius": 3,
   "class": "IconButton",
   "toolTipBorderColor": "#767676",
   "toolTipBackgroundColor": "#F6F6F6"
  },
  "preloadEnabled": false
 },
 {
  "movementMode": "constrained",
  "buttonZoomIn": {
   "verticalAlign": "middle",
   "maxHeight": 64,
   "toolTipTextShadowBlurRadius": 3,
   "paddingRight": 0,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingRight": 6,
   "mode": "push",
   "width": 52,
   "height": 57,
   "borderSize": 0,
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "toolTip": "zoom",
   "transparencyActive": false,
   "paddingLeft": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "shadow": false,
   "toolTipShadowColor": "#333333",
   "cursor": "hand",
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "id": "IconButton_ABF37345_A5A5_90F5_41C4_A69638B69916",
   "maxWidth": 64,
   "toolTipShadowVerticalLength": 0,
   "paddingTop": 0,
   "minWidth": 1,
   "borderRadius": 0,
   "toolTipOpacity": 1,
   "iconURL": "skin/IconButton_ABF37345_A5A5_90F5_41C4_A69638B69916.png",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipShadowSpread": 0,
   "backgroundOpacity": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowBlurRadius": 3,
   "class": "IconButton",
   "toolTipBorderColor": "#767676",
   "toolTipBackgroundColor": "#F6F6F6"
  },
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomOut": {
   "verticalAlign": "middle",
   "maxHeight": 64,
   "toolTipTextShadowBlurRadius": 3,
   "paddingRight": 0,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingRight": 6,
   "mode": "push",
   "width": 50,
   "height": 53,
   "borderSize": 0,
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "toolTip": "menos zoom",
   "transparencyActive": false,
   "paddingLeft": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipTextShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "shadow": false,
   "toolTipShadowColor": "#333333",
   "cursor": "hand",
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "id": "IconButton_AB5F9B3D_A5A6_909A_41D6_66829674167D",
   "maxWidth": 64,
   "toolTipShadowVerticalLength": 0,
   "paddingTop": 0,
   "minWidth": 1,
   "borderRadius": 0,
   "toolTipOpacity": 1,
   "iconURL": "skin/IconButton_AB5F9B3D_A5A6_909A_41D6_66829674167D.png",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipShadowSpread": 0,
   "backgroundOpacity": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowBlurRadius": 3,
   "class": "IconButton",
   "toolTipBorderColor": "#767676",
   "toolTipBackgroundColor": "#F6F6F6"
  },
  "viewerArea": {
   "playbackBarHeight": 10,
   "playbackBarHeadBorderRadius": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBottom": 0,
   "playbackBarBorderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarHeadBorderColor": "#000000",
   "progressBarOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "progressRight": 0,
   "toolTipFontWeight": "normal",
   "shadow": false,
   "progressHeight": 10,
   "toolTipShadowColor": "#333333",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBarBorderRadius": 0,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "paddingBottom": 0,
   "playbackBarBackgroundOpacity": 1,
   "progressBorderColor": "#000000",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBorderSize": 0,
   "toolTipOpacity": 1,
   "minWidth": 1,
   "progressBottom": 2,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "paddingTop": 0,
   "playbackBarLeft": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "progressOpacity": 1,
   "transitionMode": "fade_out_fade_in",
   "playbackBarHeadShadow": true,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadOpacity": 1,
   "class": "ViewerArea",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "progressLeft": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "toolTipTextShadowBlurRadius": 3,
   "width": "100%",
   "playbackBarHeadWidth": 6,
   "borderSize": 0,
   "minHeight": 1,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "progressBackgroundOpacity": 1,
   "paddingLeft": 0,
   "height": "82%",
   "toolTipShadowOpacity": 1,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadShadowColor": "#000000",
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBorderSize": 0,
   "top": "4.92%",
   "progressBorderRadius": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "id": "MapViewer",
   "playbackBarHeadHeight": 15,
   "playbackBarOpacity": 1,
   "progressBarBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "borderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "left": "0%",
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderSize": 0,
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipBackgroundColor": "#F6F6F6"
  }
 },
 {
  "timeToIdle": 25000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.15,
   "pitch": 4.1
  },
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
  "idleSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
       "yaw": 9.25,
       "backwardYaw": -168.78,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
                "yaw": 8.18,
                "backwardYaw": -171.44,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "partial": false,
                 "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
                   "yaw": 11.35,
                   "backwardYaw": -170.88,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "partial": false,
                       "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "partial": false,
                          "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
                            "yaw": -12.18,
                            "backwardYaw": 173.89,
                            "distance": 1
                           }
                          ],
                          "mapLocations": [
                           {
                            "x": 36.6,
                            "y": 395.93,
                            "class": "PanoramaMapLocation",
                            "angle": 57.53,
                            "map": {
                             "class": "Map",
                             "width": 1104,
                             "id": "map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A",
                             "fieldOfViewOverlayOutsideOpacity": 0,
                             "height": 425,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 425,
                                "class": "ImageResourceLevel",
                                "width": 1104,
                                "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A.png"
                               },
                               {
                                "height": 212,
                                "class": "ImageResourceLevel",
                                "grayscale": true,
                                "width": 552,
                                "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_lq.png"
                               }
                              ]
                             },
                             "fieldOfViewOverlayInsideOpacity": 0.4,
                             "fieldOfViewOverlayOutsideColor": "#000000",
                             "fieldOfViewOverlayInsideColor": "#0000FF",
                             "label": "1902 ",
                             "overlays": [
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B0ABDCB8_A5E7_919B_41DF_CDADA651ACDB",
                               "map": {
                                "offsetY": 0,
                                "x": 958,
                                "width": 42.83,
                                "y": 100.93,
                                "height": 45.22,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_0_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 45.22,
                                "x": 958,
                                "y": 100.93,
                                "width": 42.83,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 45,
                                   "class": "ImageResourceLevel",
                                   "width": 42,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_0.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 5)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B0DA3DF2_A5E6_93AF_41D1_9D791AD820FA",
                               "map": {
                                "offsetY": 0,
                                "x": 886.8,
                                "width": 43.88,
                                "y": 111.73,
                                "height": 47.06,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 23,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_1_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 47.06,
                                "x": 886.8,
                                "y": 111.73,
                                "width": 43.88,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 47,
                                   "class": "ImageResourceLevel",
                                   "width": 43,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_1.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 6)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B0953E1B_A5E5_909E_41A8_1255FE921D56",
                               "map": {
                                "offsetY": 0,
                                "x": 772.13,
                                "width": 49.57,
                                "y": 134.13,
                                "height": 45.75,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 22,
                                   "class": "ImageResourceLevel",
                                   "width": 24,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_2_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 45.75,
                                "x": 772.13,
                                "y": 134.13,
                                "width": 49.57,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 45,
                                   "class": "ImageResourceLevel",
                                   "width": 49,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_2.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 7)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B32A9635_A5E2_B0AA_41BE_03A6DF1A9FC0",
                               "map": {
                                "offsetY": 0,
                                "x": 534.8,
                                "width": 48.29,
                                "y": 180.67,
                                "height": 52.11,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 26,
                                   "class": "ImageResourceLevel",
                                   "width": 24,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_3_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 52.11,
                                "x": 534.8,
                                "y": 180.67,
                                "width": 48.29,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 52,
                                   "class": "ImageResourceLevel",
                                   "width": 48,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_3.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 8)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B034EA88_A5E3_F07B_41DF_3291FEFCB54B",
                               "map": {
                                "offsetY": 0,
                                "x": 404.53,
                                "width": 40.86,
                                "y": 216.93,
                                "height": 40.86,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 20,
                                   "class": "ImageResourceLevel",
                                   "width": 20,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_4_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 40.86,
                                "x": 404.53,
                                "y": 216.93,
                                "width": 40.86,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 40,
                                   "class": "ImageResourceLevel",
                                   "width": 40,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_4.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 9)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B36CCF15_A5E2_F095_41C0_D523515420C3",
                               "map": {
                                "offsetY": 0,
                                "x": 313.87,
                                "width": 43.41,
                                "y": 231.6,
                                "height": 42.14,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 21,
                                   "class": "ImageResourceLevel",
                                   "width": 21,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_5_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 42.14,
                                "x": 313.87,
                                "y": 231.6,
                                "width": 43.41,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 42,
                                   "class": "ImageResourceLevel",
                                   "width": 43,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_5.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 10)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B32A2ED7_A5FD_F196_41E3_CB890A9B5C18",
                               "map": {
                                "offsetY": 0,
                                "x": 192,
                                "width": 40.86,
                                "y": 260.93,
                                "height": 38.31,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 19,
                                   "class": "ImageResourceLevel",
                                   "width": 20,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_6_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 38.31,
                                "x": 192,
                                "y": 260.93,
                                "width": 40.86,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 38,
                                   "class": "ImageResourceLevel",
                                   "width": 40,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_6.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 11)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B2CAFE16_A5FE_B097_41B1_F25B7310DA11",
                               "map": {
                                "offsetY": 0,
                                "x": 75.2,
                                "width": 35.12,
                                "y": 334.27,
                                "height": 37.67,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 18,
                                   "class": "ImageResourceLevel",
                                   "width": 17,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_7_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 37.67,
                                "x": 75.2,
                                "y": 334.27,
                                "width": 35.12,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 37,
                                   "class": "ImageResourceLevel",
                                   "width": 35,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_7.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 12)"
                                }
                               ],
                               "useHandCursor": true
                              },
                              {
                               "rollOverDisplay": false,
                               "id": "overlay_B2823226_A5FF_B0B6_41C4_F76DF0CEA054",
                               "map": {
                                "offsetY": 0,
                                "x": 18.4,
                                "width": 36.39,
                                "y": 377.73,
                                "height": 36.39,
                                "class": "HotspotMapOverlayMap",
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 18,
                                   "class": "ImageResourceLevel",
                                   "width": 18,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_8_map.gif"
                                  }
                                 ]
                                }
                               },
                               "class": "AreaHotspotMapOverlay",
                               "image": {
                                "height": 36.39,
                                "x": 18.4,
                                "y": 377.73,
                                "width": 36.39,
                                "class": "HotspotMapOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 36,
                                   "class": "ImageResourceLevel",
                                   "width": 36,
                                   "url": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_HS_8.png"
                                  }
                                 ]
                                }
                               },
                               "areas": [
                                {
                                 "toolTip": "ir al lugar",
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 13)"
                                }
                               ],
                               "useHandCursor": true
                              }
                             ],
                             "maximumZoomFactor": 1.2,
                             "thumbnailUrl": "media/map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A_t.png",
                             "scaleMode": "fit_inside",
                             "initialZoomFactor": 1,
                             "fieldOfViewOverlayRadiusScale": 0.1,
                             "minimumZoomFactor": 0.5
                            }
                           }
                          ],
                          "pitch": 0,
                          "hfov": 360,
                          "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                          "label": "9-1902",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "hfov": 7.22,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -12.18,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 60,
                                   "class": "ImageResourceLevel",
                                   "width": 60,
                                   "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -9.43
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_B7C87EE7_A62A_3199_41E1_544F4566F9C8",
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "ir",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635, this.camera_B14E53C0_A9EB_F7B0_41E4_05E5700E4353); this.mainPlayList.set('selectedIndex', 12)",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "hfov": 7.22,
                                "yaw": -12.18,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 120,
                                   "class": "ImageResourceLevel",
                                   "width": 121,
                                   "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -9.43
                               }
                              ]
                             }
                            ],
                            "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3000,
                               "class": "ImageResourceLevel",
                               "width": 6000,
                               "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": 173.89,
                         "backwardYaw": -12.18,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
                         "yaw": -2.66,
                         "backwardYaw": -175.76,
                         "distance": 1
                        }
                       ],
                       "mapLocations": [
                        {
                         "x": 92.76,
                         "y": 353.1,
                         "class": "PanoramaMapLocation",
                         "angle": 56.66,
                         "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
                        }
                       ],
                       "pitch": 0,
                       "hfov": 360,
                       "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                       "label": "8-1902",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "hfov": 6.35,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -2.66,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 52,
                                "class": "ImageResourceLevel",
                                "width": 53,
                                "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -5.06
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_B6CB7BD7_A626_17B9_41E1_CCD21F87A8F5",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "ir",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952, this.camera_B07F0008_A9EB_F0B1_41AD_8EC4B74F2814); this.mainPlayList.set('selectedIndex', 11)",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.35,
                             "yaw": -2.66,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 105,
                                "class": "ImageResourceLevel",
                                "width": 106,
                                "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -5.06
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "hfov": 6.72,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 173.89,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 55,
                                "class": "ImageResourceLevel",
                                "width": 56,
                                "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -7.1
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_B77466FA_A62A_116B_41BB_285C6A1A4867",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "ir",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5, this.camera_B08D1FEB_A9EB_EF77_41DC_7A7B721EB66F); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.72,
                             "yaw": 173.89,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 110,
                                "class": "ImageResourceLevel",
                                "width": 112,
                                "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -7.1
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3000,
                            "class": "ImageResourceLevel",
                            "width": 6000,
                            "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -175.76,
                      "backwardYaw": -2.66,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
                      "yaw": 0.62,
                      "backwardYaw": -172.64,
                      "distance": 1
                     }
                    ],
                    "mapLocations": [
                     {
                      "x": 212.43,
                      "y": 280.09,
                      "class": "PanoramaMapLocation",
                      "angle": 84.81,
                      "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
                     }
                    ],
                    "pitch": 0,
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                    "label": "7-1902",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "hfov": 4.44,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 0.62,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 37,
                             "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.35
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_B65206FE_A626_116B_41C1_A92D5B9410CD",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "ir",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717, this.camera_B184931E_A9EB_F0D0_41A2_6EF237BF917F); this.mainPlayList.set('selectedIndex', 10)",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.44,
                          "yaw": 0.62,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 68,
                             "class": "ImageResourceLevel",
                             "width": 74,
                             "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -4.35
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 4.2,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -175.76,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 33,
                             "class": "ImageResourceLevel",
                             "width": 35,
                             "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.35
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_B6525596_A626_13BB_41DC_B9F0FEE5928E",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "ir",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635, this.camera_B19B030C_A9EB_F0B0_41D0_E4B31D625F2B); this.mainPlayList.set('selectedIndex', 12)",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.2,
                          "yaw": -175.76,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "class": "ImageResourceLevel",
                             "width": 70,
                             "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -4.35
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3000,
                         "class": "ImageResourceLevel",
                         "width": 6000,
                         "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -172.64,
                   "backwardYaw": 0.62,
                   "distance": 1
                  }
                 ],
                 "mapLocations": [
                  {
                   "x": 335.57,
                   "y": 252.67,
                   "class": "PanoramaMapLocation",
                   "angle": 82.67,
                   "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                 "label": "6-1902",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 7.29,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 11.35,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 60,
                          "class": "ImageResourceLevel",
                          "width": 60,
                          "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.54
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_A9EC12CB_A61A_F1A9_41CB_16AEBD6A067D",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6, this.camera_B0971FB4_A9EB_EFD1_41E1_07918ED72C4F); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 7.29,
                       "yaw": 11.35,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 120,
                          "class": "ImageResourceLevel",
                          "width": 121,
                          "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -5.54
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 5.41,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -172.64,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 44,
                          "class": "ImageResourceLevel",
                          "width": 45,
                          "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.68
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_A9EDCE98_A61A_31B7_41DE_FA347B461888",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952, this.camera_B099DFCF_A9EB_EF4F_41E4_1E263D3EB672); this.mainPlayList.set('selectedIndex', 11)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 5.41,
                       "yaw": -172.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 88,
                          "class": "ImageResourceLevel",
                          "width": 90,
                          "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -4.68
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3000,
                      "class": "ImageResourceLevel",
                      "width": 6000,
                      "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -170.88,
                "backwardYaw": 11.35,
                "distance": 1
               }
              ],
              "mapLocations": [
               {
                "x": 424.96,
                "y": 237.36,
                "class": "PanoramaMapLocation",
                "angle": 77.2,
                "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
              "label": "5-1902",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 9.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 8.18,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 80,
                       "class": "ImageResourceLevel",
                       "width": 83,
                       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.5
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_A97E5D1B_A61A_10A9_41D2_AA5C6934CE29",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419, this.camera_B16AD38B_A9EB_F7B0_41DC_1ADC485398FD); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 9.99,
                    "yaw": 8.18,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 160,
                       "class": "ImageResourceLevel",
                       "width": 167,
                       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -5.5
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 4.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -170.88,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 37,
                       "class": "ImageResourceLevel",
                       "width": 37,
                       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -4.99
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_A96BA860_A61A_1097_41CD_0364C3C50A6E",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717, this.camera_B152139D_A9EB_F7D0_41AD_3EAFEC6499F4); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.51,
                    "yaw": -170.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 74,
                       "class": "ImageResourceLevel",
                       "width": 75,
                       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -4.99
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3000,
                   "class": "ImageResourceLevel",
                   "width": 6000,
                   "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -171.44,
             "backwardYaw": 8.18,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
             "yaw": 8.21,
             "backwardYaw": -171.47,
             "distance": 1
            }
           ],
           "mapLocations": [
            {
             "x": 558.95,
             "y": 206.72,
             "class": "PanoramaMapLocation",
             "angle": 81,
             "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
           "label": "4-1902",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 3.74,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 8.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 31,
                    "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -2.69
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_A8E22BAE_A61E_17EB_41E2_22390162416E",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F, this.camera_B15AADEE_A9EB_D370_41D3_7B65BC31AE07); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 3.74,
                 "yaw": 8.21,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 60,
                    "class": "ImageResourceLevel",
                    "width": 62,
                    "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -2.69
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 2.55,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -171.44,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 19,
                    "class": "ImageResourceLevel",
                    "width": 21,
                    "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -2.6
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_A90E6D5D_A61A_10A9_41CB_32C3462937B7",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6, this.camera_B150ADDD_A9EB_D350_41B3_AC25F9BC14C8); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 2.55,
                 "yaw": -171.44,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 38,
                    "class": "ImageResourceLevel",
                    "width": 42,
                    "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -2.6
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3000,
                "class": "ImageResourceLevel",
                "width": 6000,
                "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -171.47,
          "backwardYaw": 8.21,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
          "yaw": 7.64,
          "backwardYaw": -170.89,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 796.92,
          "y": 157.01,
          "class": "PanoramaMapLocation",
          "angle": 81.7,
          "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
        "label": "3-1902",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 4.16,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 7.64,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 32,
                 "class": "ImageResourceLevel",
                 "width": 34,
                 "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -4.38
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_A875AA04_A61E_309F_41D1_64B39D52EC9C",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3, this.camera_B3C0417A_A9EB_F351_41E4_DF3C777AAC82); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 4.16,
              "yaw": 7.64,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 64,
                 "class": "ImageResourceLevel",
                 "width": 69,
                 "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -4.38
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 3.19,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -171.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "class": "ImageResourceLevel",
                 "width": 26,
                 "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -2.34
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_A876A974_A61F_F37F_41E2_D1D6A138CFCB",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419, this.camera_B3DF515D_A9EB_F353_41E2_8C5ECCBB86CE); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 3.19,
              "yaw": -171.47,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 53,
                 "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -2.34
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -170.89,
       "backwardYaw": 7.64,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 908.74,
       "y": 135.26,
       "class": "PanoramaMapLocation",
       "angle": 80.75,
       "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "2-1902",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 6.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 9.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "class": "ImageResourceLevel",
              "width": 50,
              "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -8.15
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_ABD0377E_A61A_3F6B_41DE_94A691C7C505",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4, this.camera_B19592E9_A9EB_F170_41B4_5A39BADBA5DE); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 6.02,
           "yaw": 9.25,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 104,
              "class": "ImageResourceLevel",
              "width": 101,
              "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -8.15
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 5.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -170.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 42,
              "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.65
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_ABC8C6D0_A61E_11B7_41B6_7AFF5393F2B5",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F, this.camera_B19152FB_A9EB_F150_4147_070C4A30D824); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 5.11,
           "yaw": -170.89,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 79,
              "class": "ImageResourceLevel",
              "width": 85,
              "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -4.65
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -168.78,
    "backwardYaw": 9.25,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 979.41,
    "y": 123.54,
    "class": "PanoramaMapLocation",
    "angle": 79.65,
    "map": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "1-1902",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 6.9,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -168.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -10.07
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_AA8A4BF0_A61A_3777_41D9_F549E9D8C767",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3, this.camera_B0DB3F45_A9EB_D0B3_41A0_928911F4F250); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 6.9,
        "yaw": -168.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.07
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
       "yaw": 8.61,
       "backwardYaw": -172.66,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 585.79,
       "y": 199.55,
       "class": "PanoramaMapLocation",
       "angle": 89.22,
       "map": {
        "class": "Map",
        "width": 1081,
        "id": "map_A808CD36_A5AE_9097_41D0_4BA0FAA22255",
        "fieldOfViewOverlayOutsideOpacity": 0,
        "height": 430,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 430,
           "class": "ImageResourceLevel",
           "width": 1081,
           "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255.png"
          },
          {
           "height": 215,
           "class": "ImageResourceLevel",
           "grayscale": true,
           "width": 540,
           "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_lq.png"
          }
         ]
        },
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "fieldOfViewOverlayOutsideColor": "#000000",
        "fieldOfViewOverlayInsideColor": "#0000FF",
        "label": "1909",
        "overlays": [
         {
          "rollOverDisplay": false,
          "id": "overlay_B2B3E72A_A5E5_B0BF_41CD_65D9CE59B624",
          "map": {
           "offsetY": 0,
           "x": 959.32,
           "width": 64.18,
           "y": 153.14,
           "height": 65.44,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 32,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_0_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 65.44,
           "x": 959.32,
           "y": 153.14,
           "width": 64.18,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 64,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_0.png"
             }
            ]
           }
          },
          "areas": [
           {
            "toolTip": "ir al lugar",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 14)"
           }
          ],
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_B261B4D4_A5E6_91EA_41D0_51DF986BE80E",
          "map": {
           "offsetY": 0,
           "x": 555.38,
           "width": 60.81,
           "y": 171.81,
           "height": 55.49,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_1_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 55.49,
           "x": 555.38,
           "y": 171.81,
           "width": 60.81,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 55,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_1.png"
             }
            ]
           }
          },
          "areas": [
           {
            "toolTip": "ir al lugar",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 15)"
           }
          ],
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_B2025DF8_A5E6_939A_41BA_D6E6512B1578",
          "map": {
           "offsetY": 0,
           "x": 346.1,
           "width": 57.01,
           "y": 182.52,
           "height": 54.72,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 27,
              "class": "ImageResourceLevel",
              "width": 28,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_2_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 54.72,
           "x": 346.1,
           "y": 182.52,
           "width": 57.01,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 57,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_2.png"
             }
            ]
           }
          },
          "areas": [
           {
            "toolTip": "ir al lugar",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 16)"
           }
          ],
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_BD5B320D_A5E7_907A_41B8_7E3616FA467E",
          "map": {
           "offsetY": 0,
           "x": 190.09,
           "width": 63.1,
           "y": 188.65,
           "height": 60.05,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_3_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 60.05,
           "x": 190.09,
           "y": 188.65,
           "width": 63.1,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 63,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_3.png"
             }
            ]
           }
          },
          "areas": [
           {
            "toolTip": "ir al lugar",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 17)"
           }
          ],
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_BD25F047_A5E6_B0F6_41C8_31272C7232E4",
          "map": {
           "offsetY": 0,
           "x": 14.23,
           "width": 63.86,
           "y": 235.78,
           "height": 66.9,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 33,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_4_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 66.9,
           "x": 14.23,
           "y": 235.78,
           "width": 63.86,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 66,
              "class": "ImageResourceLevel",
              "width": 63,
              "url": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_HS_4.png"
             }
            ]
           }
          },
          "areas": [
           {
            "toolTip": "ir al lugar",
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 18)"
           }
          ],
          "useHandCursor": true
         }
        ],
        "maximumZoomFactor": 1.2,
        "thumbnailUrl": "media/map_A808CD36_A5AE_9097_41D0_4BA0FAA22255_t.png",
        "scaleMode": "fit_inside",
        "initialZoomFactor": 1,
        "fieldOfViewOverlayRadiusScale": 0.1,
        "minimumZoomFactor": 0.5
       }
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "2-1909",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 4.54,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 8.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 38,
              "class": "ImageResourceLevel",
              "width": 37,
              "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -3.23
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B56A04A4_A62E_319F_4191_B74BBFEE97E8",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5, this.camera_B1742355_A9EB_F750_41D2_92FD13647F4F); this.mainPlayList.set('selectedIndex', 14)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 4.54,
           "yaw": 8.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 76,
              "class": "ImageResourceLevel",
              "width": 75,
              "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -3.23
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 3.79,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -172.18,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 31,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.95
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B54F5FA3_A62A_2F99_41DA_F028BC664569",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 3.79,
           "yaw": -172.18,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 62,
              "class": "ImageResourceLevel",
              "width": 63,
              "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -4.95
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -172.66,
    "backwardYaw": 8.61,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 991.41,
    "y": 185.86,
    "class": "PanoramaMapLocation",
    "angle": 89.12,
    "map": "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "1-1909",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 5.27,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -172.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 44,
           "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.66
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_B4BAABAE_A62E_37EB_41C7_A54FE0A8EFA0",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097, this.camera_B055B03F_A9EB_F0CF_41B7_C8FBDC0FDF83); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 5.27,
        "yaw": -172.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 81,
           "class": "ImageResourceLevel",
           "width": 88,
           "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.66
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
       "yaw": 8.61,
       "backwardYaw": -169.09,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
          "yaw": 0.04,
          "backwardYaw": -175.27,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 46.16,
          "y": 269.24,
          "class": "PanoramaMapLocation",
          "angle": 63.63,
          "map": "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255"
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
        "label": "5-1909",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 3.53,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.44
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_B313898B_A626_33A9_41D5_5526037EC418",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF, this.camera_B0D68F29_A9EB_D0F0_41D3_C5DF6B7D04D3); this.mainPlayList.set('selectedIndex', 17)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 3.53,
              "yaw": 0.04,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58,
                 "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.44
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -175.27,
       "backwardYaw": 0.04,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 221.64,
       "y": 218.68,
       "class": "PanoramaMapLocation",
       "angle": 86.95,
       "map": "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "4-1909",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 3.62,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 8.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -6.63
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B2A6D7A1_A626_1F99_41DF_56AD3E322F73",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73, this.camera_B1817331_A9EB_F0D0_41E2_BC95A3CDE6E3); this.mainPlayList.set('selectedIndex', 16)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 3.62,
           "yaw": 8.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -6.63
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 4.2,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -175.27,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 32,
              "class": "ImageResourceLevel",
              "width": 35,
              "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.7
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B2B24A5A_A626_10AB_41BE_F5844240CB27",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8, this.camera_B18A3343_A9EB_F0B0_41DD_1B1EE6C611FE); this.mainPlayList.set('selectedIndex', 18)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 4.2,
           "yaw": -175.27,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 70,
              "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -4.7
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -169.09,
    "backwardYaw": 8.61,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 374.61,
    "y": 209.88,
    "class": "PanoramaMapLocation",
    "angle": 84.87,
    "map": "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "3-1909",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 4.08,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 8.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 34,
           "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.74
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_B5BE3285_A62B_F199_41CE_8328F1906B77",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 4.08,
        "yaw": 8.22,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 68,
           "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.74
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.82,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -169.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 31,
           "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.62
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_B2536C42_A62A_109B_41D1_A9BE51D915C9",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF, this.camera_B061D027_A9EB_F0FF_41D9_F1BFE6EA895E); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 3.82,
        "yaw": -169.09,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -3.62
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
       "yaw": 1.69,
       "backwardYaw": 177.15,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
          "yaw": 30.84,
          "backwardYaw": -163.44,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "partial": false,
                 "id": "panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
                   "yaw": 32.24,
                   "backwardYaw": -160.51,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "id": "panorama_841FB493_9651_8761_41E2_4294B174FE26",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
                      "yaw": -9.47,
                      "backwardYaw": 171.38,
                      "distance": 1
                     }
                    ],
                    "mapLocations": [
                     {
                      "x": 77.86,
                      "y": 345.57,
                      "class": "PanoramaMapLocation",
                      "angle": 73.07,
                      "map": {
                       "class": "Map",
                       "width": 1392,
                       "id": "map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80",
                       "fieldOfViewOverlayOutsideOpacity": 0,
                       "height": 532,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 532,
                          "class": "ImageResourceLevel",
                          "width": 1392,
                          "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80.png"
                         },
                         {
                          "height": 266,
                          "class": "ImageResourceLevel",
                          "grayscale": true,
                          "width": 696,
                          "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_lq.png"
                         }
                        ]
                       },
                       "fieldOfViewOverlayInsideOpacity": 0.4,
                       "fieldOfViewOverlayOutsideColor": "#000000",
                       "fieldOfViewOverlayInsideColor": "#0000FF",
                       "label": "a\u00f1os 1930 ",
                       "overlays": [
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BCCA2E52_A5E2_F0EF_41C9_C94E4EAB21C2",
                         "map": {
                          "offsetY": 0,
                          "x": 1287.77,
                          "width": 66.44,
                          "y": 179.21,
                          "height": 68.06,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 33,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_0_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 68.06,
                          "x": 1287.72,
                          "y": 179.15,
                          "width": 66.44,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 68,
                             "class": "ImageResourceLevel",
                             "width": 66,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_0.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 19)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BC96A7B9_A5ED_9F9A_41D3_3318288CEEF9",
                         "map": {
                          "offsetY": 0,
                          "x": 1041.31,
                          "width": 84.75,
                          "y": 229.48,
                          "height": 78.26,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 39,
                             "class": "ImageResourceLevel",
                             "width": 42,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_1_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 78.26,
                          "x": 1041.25,
                          "y": 229.46,
                          "width": 84.75,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 78,
                             "class": "ImageResourceLevel",
                             "width": 84,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_1.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 20)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BC217E35_A5EE_F095_41D7_4BE35FED2A4D",
                         "map": {
                          "offsetY": 0,
                          "x": 845.12,
                          "width": 89.61,
                          "y": 133.82,
                          "height": 83.12,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 41,
                             "class": "ImageResourceLevel",
                             "width": 44,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_2_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 83.12,
                          "x": 845.08,
                          "y": 133.77,
                          "width": 89.61,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 83,
                             "class": "ImageResourceLevel",
                             "width": 89,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_2.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 21)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BC0A30A4_A5EE_91AA_41E0_D23FD058B3ED",
                         "map": {
                          "offsetY": 0,
                          "x": 673.98,
                          "width": 84.75,
                          "y": 236.03,
                          "height": 84.75,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 42,
                             "class": "ImageResourceLevel",
                             "width": 42,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_3_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 84.75,
                          "x": 673.96,
                          "y": 235.94,
                          "width": 84.75,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 84,
                             "class": "ImageResourceLevel",
                             "width": 84,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_3.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 22)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BFDF478C_A5ED_707B_41E0_04D8EC46F847",
                         "map": {
                          "offsetY": 0,
                          "x": 278.4,
                          "width": 96.09,
                          "y": 265.29,
                          "height": 89.61,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 44,
                             "class": "ImageResourceLevel",
                             "width": 48,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_4_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 89.61,
                          "x": 278.32,
                          "y": 265.19,
                          "width": 96.09,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 89,
                             "class": "ImageResourceLevel",
                             "width": 96,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_4.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 23)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BF51AFC8_A5E3_AFFA_41DF_E8E3E484E17C",
                         "map": {
                          "offsetY": 0,
                          "x": 71.28,
                          "width": 91.23,
                          "y": 208.63,
                          "height": 84.75,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 42,
                             "class": "ImageResourceLevel",
                             "width": 45,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_5_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 84.75,
                          "x": 71.22,
                          "y": 208.56,
                          "width": 91.23,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 84,
                             "class": "ImageResourceLevel",
                             "width": 91,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_5.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 24)"
                          }
                         ],
                         "useHandCursor": true
                        },
                        {
                         "rollOverDisplay": false,
                         "id": "overlay_BE7A66DD_A5E2_9195_41D5_34EE1B9C9F00",
                         "map": {
                          "offsetY": 0,
                          "x": 42.03,
                          "width": 71.78,
                          "y": 309,
                          "height": 73.4,
                          "class": "HotspotMapOverlayMap",
                          "offsetX": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 36,
                             "class": "ImageResourceLevel",
                             "width": 35,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_6_map.gif"
                            }
                           ]
                          }
                         },
                         "class": "AreaHotspotMapOverlay",
                         "image": {
                          "height": 73.4,
                          "x": 41.97,
                          "y": 308.87,
                          "width": 71.78,
                          "class": "HotspotMapOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 73,
                             "class": "ImageResourceLevel",
                             "width": 71,
                             "url": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_HS_6.png"
                            }
                           ]
                          }
                         },
                         "areas": [
                          {
                           "toolTip": "ir al lugar",
                           "class": "HotspotMapOverlayArea",
                           "mapColor": "#FF0000",
                           "click": "this.mainPlayList.set('selectedIndex', 25)"
                          }
                         ],
                         "useHandCursor": true
                        }
                       ],
                       "maximumZoomFactor": 1.2,
                       "thumbnailUrl": "media/map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80_t.png",
                       "scaleMode": "fit_inside",
                       "initialZoomFactor": 1,
                       "fieldOfViewOverlayRadiusScale": 0.1,
                       "minimumZoomFactor": 0.5
                      }
                     }
                    ],
                    "pitch": 0,
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                    "label": "7-1930",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "hfov": 4.58,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -9.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 38,
                             "class": "ImageResourceLevel",
                             "width": 38,
                             "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.79
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_BF8C33B7_A62E_37F9_41D0_E74620CE23BF",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "ir",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891, this.camera_B1613DA8_A9EB_D3F0_41DE_E698FB9E652E); this.mainPlayList.set('selectedIndex', 24)",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.58,
                          "yaw": -9.47,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 77,
                             "class": "ImageResourceLevel",
                             "width": 76,
                             "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -3.79
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3000,
                         "class": "ImageResourceLevel",
                         "width": 6000,
                         "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_t.jpg",
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 171.38,
                   "backwardYaw": -9.47,
                   "distance": 1
                  }
                 ],
                 "mapLocations": [
                  {
                   "x": 116.83,
                   "y": 250.93,
                   "class": "PanoramaMapLocation",
                   "angle": 86.82,
                   "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                 "label": "6-1930",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 5.39,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 32.24,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 42,
                          "class": "ImageResourceLevel",
                          "width": 45,
                          "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.19
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_BE86E943_A62A_3098_41DB_5DD2018E8354",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6, this.camera_B1CFA25B_A9EB_F157_41D8_F2A7E93D1AA7); this.mainPlayList.set('selectedIndex', 23)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 5.39,
                       "yaw": 32.24,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 85,
                          "class": "ImageResourceLevel",
                          "width": 90,
                          "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -5.19
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 3.64,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 171.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 31,
                          "class": "ImageResourceLevel",
                          "width": 30,
                          "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.5
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_BFFB3066_A62A_109B_41D6_D64391BF534F",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_841FB493_9651_8761_41E2_4294B174FE26, this.camera_B1C8726D_A9EB_F173_41DF_9133ACB7274A); this.mainPlayList.set('selectedIndex', 25)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 3.64,
                       "yaw": 171.38,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 62,
                          "class": "ImageResourceLevel",
                          "width": 60,
                          "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -2.5
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3000,
                      "class": "ImageResourceLevel",
                      "width": 6000,
                      "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "thumbnailUrl": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_t.jpg",
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -160.51,
                "backwardYaw": 32.24,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
                "yaw": 2.09,
                "backwardYaw": -167.45,
                "distance": 1
               }
              ],
              "mapLocations": [
               {
                "x": 326.36,
                "y": 310,
                "class": "PanoramaMapLocation",
                "angle": 86.42,
                "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
              "label": "5-1930",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 4.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 2.09,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 32,
                       "class": "ImageResourceLevel",
                       "width": 33,
                       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -1.96
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_BE013E2E_A626_10EB_41D0_056F149D5195",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7, this.camera_B10DCEC3_A9EB_D1B0_41B3_BB6C24E1B58A); this.mainPlayList.set('selectedIndex', 22)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.07,
                    "yaw": 2.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 65,
                       "class": "ImageResourceLevel",
                       "width": 67,
                       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -1.96
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 3.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -160.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 30,
                       "class": "ImageResourceLevel",
                       "width": 31,
                       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -3.87
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_BED151B1_A62A_13F9_41E0_1E85203AA136",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891, this.camera_B119BEA8_A9EB_D1F0_41DB_9A5817D743F9); this.mainPlayList.set('selectedIndex', 24)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 3.82,
                    "yaw": -160.51,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 61,
                       "class": "ImageResourceLevel",
                       "width": 63,
                       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -3.87
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3000,
                   "class": "ImageResourceLevel",
                   "width": 6000,
                   "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -167.45,
             "backwardYaw": 2.09,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
             "yaw": -8.97,
             "backwardYaw": 175.84,
             "distance": 1
            }
           ],
           "mapLocations": [
            {
             "x": 716.33,
             "y": 278.32,
             "class": "PanoramaMapLocation",
             "angle": 83.66,
             "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
           "label": "4-1930",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 4.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -8.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 32,
                    "class": "ImageResourceLevel",
                    "width": 33,
                    "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -0.34
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_B1B0C57C_A626_F36F_41D2_11E4E78BBDD0",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9, this.camera_B021C0B9_A9EB_F1D3_41DA_C15D1E6D2232); this.mainPlayList.set('selectedIndex', 21)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 4.01,
                 "yaw": -8.97,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 66,
                    "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -0.34
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 2.45,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -167.45,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 19,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -1.97
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_B1967DFC_A626_136F_41B8_3131B90F915B",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6, this.camera_B03C609D_A9EB_F1D3_41E4_5E0E7E38B9DB); this.mainPlayList.set('selectedIndex', 23)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 2.45,
                 "yaw": -167.45,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 39,
                    "class": "ImageResourceLevel",
                    "width": 40,
                    "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -1.97
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3000,
                "class": "ImageResourceLevel",
                "width": 6000,
                "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 175.84,
          "backwardYaw": -8.97,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 889.89,
          "y": 175.33,
          "class": "PanoramaMapLocation",
          "angle": 99.46,
          "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
        "label": "3-1930",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 5.87,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 30.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 49,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.72
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_B0C71F30_A63A_30F7_41CB_FFC414F38C3E",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78, this.camera_B0F0BEF4_A9EB_D150_41D8_2E5E18C3B471); this.mainPlayList.set('selectedIndex', 20)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 5.87,
              "yaw": 30.84,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 99,
                 "class": "ImageResourceLevel",
                 "width": 98,
                 "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -5.72
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 4.7,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 175.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 40,
                 "class": "ImageResourceLevel",
                 "width": 39,
                 "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -2.91
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_B146F42B_A63A_10E9_41A7_B59F24A4C63F",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7, this.camera_B0E55F12_A9EB_D0D0_41DD_A05959C063DF); this.mainPlayList.set('selectedIndex', 22)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 4.7,
              "yaw": 175.84,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 81,
                 "class": "ImageResourceLevel",
                 "width": 78,
                 "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -2.91
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -163.44,
       "backwardYaw": 30.84,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 1083.62,
       "y": 268.59,
       "class": "PanoramaMapLocation",
       "angle": 81.35,
       "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "2-1930",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 3.64,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 1.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 31,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -3.18
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B0669011_A63A_F0B9_41E4_9857FFB4D15E",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1, this.camera_B137F3D1_A9EB_F750_41E2_22130CB062C4); this.mainPlayList.set('selectedIndex', 19)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 3.64,
           "yaw": 1.69,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 63,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -3.18
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 3.4,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -163.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 26,
              "class": "ImageResourceLevel",
              "width": 28,
              "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.95
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_B3EC3ABA_A63E_F1EB_41E4_7ACDFF8188CA",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9, this.camera_B13D33E3_A9EB_F770_41C0_69264702DC95); this.mainPlayList.set('selectedIndex', 21)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 3.4,
           "yaw": -163.44,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "class": "ImageResourceLevel",
              "width": 56,
              "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -1.95
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 177.15,
    "backwardYaw": 1.69,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 1320.94,
    "y": 213.18,
    "class": "PanoramaMapLocation",
    "angle": 90,
    "map": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "1-1930",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 5.17,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 177.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -2.73
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_B3EBD445_A63A_3099_41CA_51DC4D5F8614",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78, this.camera_B1B47281_A9EB_F1B0_41BA_5A03BF4A2695); this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 5.17,
        "yaw": 177.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 79,
           "class": "ImageResourceLevel",
           "width": 86,
           "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -2.73
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FB493_9651_8761_41E2_4294B174FE26",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FB493_9651_8761_41E2_4294B174FE26_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
          "yaw": -9.38,
          "backwardYaw": -166.54,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_841FB58E_9651_8163_41B9_4845701F08EE",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
             "yaw": -0.45,
             "backwardYaw": -161.03,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "partial": false,
                 "id": "panorama_840052A4_964E_80A7_41DB_1236A96A4274",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "id": "panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274",
                      "yaw": 7.5,
                      "backwardYaw": -167.61,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "partial": false,
                       "id": "panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
                         "yaw": 5.5,
                         "backwardYaw": -174.01,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "partial": false,
                          "id": "panorama_84008721_964E_81A1_41DA_58E92351CE0C",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
                            "yaw": 26.6,
                            "backwardYaw": -170.39,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "partial": false,
                             "id": "panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "partial": false,
                                "id": "panorama_83899584_964E_8167_41CF_AD476F5C0371",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
                                  "yaw": 14.57,
                                  "backwardYaw": 175.37,
                                  "distance": 1
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "x": 36.27,
                                  "y": 330.42,
                                  "class": "PanoramaMapLocation",
                                  "angle": 72.26,
                                  "map": {
                                   "class": "Map",
                                   "width": 1401,
                                   "id": "map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174",
                                   "fieldOfViewOverlayOutsideOpacity": 0,
                                   "height": 539,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 539,
                                      "class": "ImageResourceLevel",
                                      "width": 1401,
                                      "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174.png"
                                     },
                                     {
                                      "height": 269,
                                      "class": "ImageResourceLevel",
                                      "grayscale": true,
                                      "width": 700,
                                      "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_lq.png"
                                     }
                                    ]
                                   },
                                   "fieldOfViewOverlayInsideOpacity": 0.4,
                                   "fieldOfViewOverlayOutsideColor": "#000000",
                                   "fieldOfViewOverlayInsideColor": "#0000FF",
                                   "label": "2018",
                                   "overlays": [
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE44CBB5_A5E7_97AA_41D0_09AC24B8EFF7",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 1302.19,
                                      "width": 61.98,
                                      "y": 205.24,
                                      "height": 61.98,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 30,
                                         "class": "ImageResourceLevel",
                                         "width": 30,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_0_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 61.98,
                                      "x": 1302.16,
                                      "y": 205.18,
                                      "width": 61.98,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 61,
                                         "class": "ImageResourceLevel",
                                         "width": 61,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_0.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 26)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE6875EC_A5E6_B3BB_41E2_23FE27B5803C",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 1214.2,
                                      "width": 63.61,
                                      "y": 190.35,
                                      "height": 61.98,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 30,
                                         "class": "ImageResourceLevel",
                                         "width": 31,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_1_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 61.98,
                                      "x": 1214.17,
                                      "y": 190.33,
                                      "width": 63.61,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 61,
                                         "class": "ImageResourceLevel",
                                         "width": 63,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_1.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 27)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_B9C9AF23_A5E6_F0AE_41D5_763474262A0B",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 1093.56,
                                      "width": 75.81,
                                      "y": 252.28,
                                      "height": 72.54,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 36,
                                         "class": "ImageResourceLevel",
                                         "width": 37,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_2_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 72.54,
                                      "x": 1093.48,
                                      "y": 252.23,
                                      "width": 75.81,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "class": "ImageResourceLevel",
                                         "width": 75,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_2.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 28)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE50237F_A5E5_9095_41D6_D9354DEE525C",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 855.66,
                                      "width": 74.17,
                                      "y": 272.08,
                                      "height": 62.76,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 31,
                                         "class": "ImageResourceLevel",
                                         "width": 37,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_3_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 62.76,
                                      "x": 855.6,
                                      "y": 272.05,
                                      "width": 74.17,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 62,
                                         "class": "ImageResourceLevel",
                                         "width": 74,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_3.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 29)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_B9DD5B14_A5E5_906A_41BE_EC67340688E0",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 824.69,
                                      "width": 72.54,
                                      "y": 164.47,
                                      "height": 64.39,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 32,
                                         "class": "ImageResourceLevel",
                                         "width": 36,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_4_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 64.39,
                                      "x": 824.62,
                                      "y": 164.4,
                                      "width": 72.54,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 64,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_4.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 30)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE4CEFDC_A5E2_AF9A_41DF_F4D891AA2850",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 583.58,
                                      "width": 74.17,
                                      "y": 228.09,
                                      "height": 72.54,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 36,
                                         "class": "ImageResourceLevel",
                                         "width": 37,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_5_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 72.54,
                                      "x": 583.56,
                                      "y": 228.01,
                                      "width": 74.17,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "class": "ImageResourceLevel",
                                         "width": 74,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_5.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 31)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_B9FF5D41_A5E2_90ED_41CA_1C931389FE8F",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 433.67,
                                      "width": 69.28,
                                      "y": 231.47,
                                      "height": 72.54,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 36,
                                         "class": "ImageResourceLevel",
                                         "width": 34,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_6_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 72.54,
                                      "x": 433.59,
                                      "y": 231.43,
                                      "width": 69.28,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "class": "ImageResourceLevel",
                                         "width": 69,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_6.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 32)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE114E78_A5E3_709B_41E2_453234EA282C",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 392.72,
                                      "width": 72.54,
                                      "y": 320.98,
                                      "height": 77.44,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 38,
                                         "class": "ImageResourceLevel",
                                         "width": 36,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_7_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 77.44,
                                      "x": 392.66,
                                      "y": 320.97,
                                      "width": 72.54,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 77,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_7.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 33)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BEA01D60_A5E3_90AB_41D8_1962A157EB31",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 256,
                                      "width": 72.54,
                                      "y": 241.28,
                                      "height": 69.28,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 34,
                                         "class": "ImageResourceLevel",
                                         "width": 36,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_8_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 69.28,
                                      "x": 255.98,
                                      "y": 241.22,
                                      "width": 72.54,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 69,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_8.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 34)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE2AD6EF_A5E3_71B5_41D5_AE08EF679A9F",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 117.43,
                                      "width": 72.54,
                                      "y": 268.86,
                                      "height": 74.17,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 37,
                                         "class": "ImageResourceLevel",
                                         "width": 36,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_9_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 74.17,
                                      "x": 117.35,
                                      "y": 268.78,
                                      "width": 72.54,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 74,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_9.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 35)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    },
                                    {
                                     "rollOverDisplay": false,
                                     "id": "overlay_BE75A3E7_A5E2_97B6_41E4_AD9D5C9496F2",
                                     "map": {
                                      "offsetY": 0,
                                      "x": 0,
                                      "width": 72.54,
                                      "y": 293.4,
                                      "height": 74.17,
                                      "class": "HotspotMapOverlayMap",
                                      "offsetX": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 37,
                                         "class": "ImageResourceLevel",
                                         "width": 36,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_10_map.gif"
                                        }
                                       ]
                                      }
                                     },
                                     "class": "AreaHotspotMapOverlay",
                                     "image": {
                                      "height": 74.17,
                                      "x": 0,
                                      "y": 293.33,
                                      "width": 72.54,
                                      "class": "HotspotMapOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 74,
                                         "class": "ImageResourceLevel",
                                         "width": 72,
                                         "url": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_HS_10.png"
                                        }
                                       ]
                                      }
                                     },
                                     "areas": [
                                      {
                                       "toolTip": "ir al lugar",
                                       "class": "HotspotMapOverlayArea",
                                       "mapColor": "#FF0000",
                                       "click": "this.mainPlayList.set('selectedIndex', 36)"
                                      }
                                     ],
                                     "useHandCursor": true
                                    }
                                   ],
                                   "maximumZoomFactor": 1.2,
                                   "thumbnailUrl": "media/map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174_t.png",
                                   "scaleMode": "fit_inside",
                                   "initialZoomFactor": 1,
                                   "fieldOfViewOverlayRadiusScale": 0.1,
                                   "minimumZoomFactor": 0.5
                                  }
                                 }
                                ],
                                "pitch": 0,
                                "hfov": 360,
                                "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                                "label": "11-2018",
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "hfov": 9.86,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 14.57,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 79,
                                         "class": "ImageResourceLevel",
                                         "width": 82,
                                         "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -7.23
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "id": "overlay_BF44E186_A9E6_D3B1_41D4_737229B539D0",
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "toolTip": "ir",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E, this.camera_B0A3FF9C_A9EB_EFD1_41DF_C05F0152BFE6); this.mainPlayList.set('selectedIndex', 35)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.86,
                                      "yaw": 14.57,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 158,
                                         "class": "ImageResourceLevel",
                                         "width": 165,
                                         "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -7.23
                                     }
                                    ]
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_t.jpg",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3000,
                                     "class": "ImageResourceLevel",
                                     "width": 6000,
                                     "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "class": "ImageResourceLevel",
                                     "width": 3217,
                                     "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_t.jpg",
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 175.37,
                               "backwardYaw": 14.57,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C",
                               "yaw": 7.21,
                               "backwardYaw": 172.32,
                               "distance": 1
                              }
                             ],
                             "mapLocations": [
                              {
                               "x": 153.62,
                               "y": 305.87,
                               "class": "PanoramaMapLocation",
                               "angle": 68.96,
                               "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
                              }
                             ],
                             "pitch": 0,
                             "hfov": 360,
                             "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                             "label": "10-2018",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "hfov": 4.45,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 7.21,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 36,
                                      "class": "ImageResourceLevel",
                                      "width": 37,
                                      "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -2.99
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_BC58F89A_A9F9_51D0_41B5_15D592D4F9B7",
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "toolTip": "ir",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_84008721_964E_81A1_41DA_58E92351CE0C, this.camera_B1ABB2D8_A9EB_F150_41DC_A9B0F4FE3460); this.mainPlayList.set('selectedIndex', 34)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 4.45,
                                   "yaw": 7.21,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 73,
                                      "class": "ImageResourceLevel",
                                      "width": 74,
                                      "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -2.99
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 4.28,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 175.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 35,
                                      "class": "ImageResourceLevel",
                                      "width": 35,
                                      "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -2.09
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "id": "overlay_BE432F42_A9F9_D0B1_41C7_B5014B3223D3",
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "toolTip": "ir",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_83899584_964E_8167_41CF_AD476F5C0371, this.camera_B1A1A2C6_A9EB_F1B0_41E0_F99A8F5435BD); this.mainPlayList.set('selectedIndex', 36)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 4.28,
                                   "yaw": 175.37,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 70,
                                      "class": "ImageResourceLevel",
                                      "width": 71,
                                      "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -2.09
                                  }
                                 ]
                                }
                               ],
                               "thumbnailUrl": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3000,
                                  "class": "ImageResourceLevel",
                                  "width": 6000,
                                  "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "class": "ImageResourceLevel",
                                  "width": 3217,
                                  "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "thumbnailUrl": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_t.jpg",
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 172.32,
                            "backwardYaw": 7.21,
                            "distance": 1
                           }
                          ],
                          "mapLocations": [
                           {
                            "x": 292.25,
                            "y": 275.86,
                            "class": "PanoramaMapLocation",
                            "angle": 87.34,
                            "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
                           }
                          ],
                          "pitch": 0,
                          "hfov": 360,
                          "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                          "label": "9-2018",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "hfov": 5.42,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 26.6,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 41,
                                   "class": "ImageResourceLevel",
                                   "width": 45,
                                   "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -3.56
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_BD397CE1_A9F9_7173_41B6_810701A34946",
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "ir",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584, this.camera_B16D3DB9_A9EB_D3D0_41E3_52BBE9BE2721); this.mainPlayList.set('selectedIndex', 33)",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "hfov": 5.42,
                                "yaw": 26.6,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 83,
                                   "class": "ImageResourceLevel",
                                   "width": 90,
                                   "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -3.56
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 4.56,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 172.32,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 39,
                                   "class": "ImageResourceLevel",
                                   "width": 38,
                                   "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -2.35
                               }
                              ],
                              "rollOverDisplay": false,
                              "id": "overlay_BCF73556_A9FF_5350_41E4_556B6F5445CF",
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "toolTip": "ir",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E, this.camera_B1571DCB_A9EB_D3B0_41E4_E74A1A47735B); this.mainPlayList.set('selectedIndex', 35)",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true
                               }
                              ],
                              "items": [
                               {
                                "hfov": 4.56,
                                "yaw": 172.32,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 79,
                                   "class": "ImageResourceLevel",
                                   "width": 76,
                                   "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -2.35
                               }
                              ]
                             }
                            ],
                            "thumbnailUrl": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3000,
                               "class": "ImageResourceLevel",
                               "width": 6000,
                               "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "thumbnailUrl": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_t.jpg",
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -170.39,
                         "backwardYaw": 26.6,
                         "distance": 1
                        }
                       ],
                       "mapLocations": [
                        {
                         "x": 428.93,
                         "y": 359.69,
                         "class": "PanoramaMapLocation",
                         "angle": 77.09,
                         "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
                        }
                       ],
                       "pitch": 0,
                       "hfov": 360,
                       "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                       "label": "8-2018",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "hfov": 4.27,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 5.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 32,
                                "class": "ImageResourceLevel",
                                "width": 35,
                                "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -2.87
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_BA18F528_A9FB_50F1_419A_80E34E699042",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "ir",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF, this.camera_B046305D_A9EB_F153_41E3_9AEF9210E152); this.mainPlayList.set('selectedIndex', 32)",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "hfov": 4.27,
                             "yaw": 5.5,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 65,
                                "class": "ImageResourceLevel",
                                "width": 71,
                                "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -2.87
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "hfov": 3.81,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -170.39,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 31,
                                "class": "ImageResourceLevel",
                                "width": 31,
                                "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.37
                            }
                           ],
                           "rollOverDisplay": false,
                           "id": "overlay_BDBC8344_A9F9_50B0_41DD_1AE4C4F38CCB",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "toolTip": "ir",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_84008721_964E_81A1_41DA_58E92351CE0C, this.camera_B04A607F_A9EB_F14F_41E3_123F06842091); this.mainPlayList.set('selectedIndex', 34)",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true
                            }
                           ],
                           "items": [
                            {
                             "hfov": 3.81,
                             "yaw": -170.39,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 63,
                                "class": "ImageResourceLevel",
                                "width": 63,
                                "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -3.37
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3000,
                            "class": "ImageResourceLevel",
                            "width": 6000,
                            "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "thumbnailUrl": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_t.jpg",
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -174.01,
                      "backwardYaw": 5.5,
                      "distance": 1
                     }
                    ],
                    "mapLocations": [
                     {
                      "x": 468.23,
                      "y": 267.71,
                      "class": "PanoramaMapLocation",
                      "angle": 87.4,
                      "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
                     }
                    ],
                    "pitch": 0,
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                    "label": "7-2018",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "hfov": 4.34,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 7.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 34,
                             "class": "ImageResourceLevel",
                             "width": 36,
                             "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.75
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_BAC14952_A9F9_5350_41DC_16867F32A643",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "ir",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_840052A4_964E_80A7_41DB_1236A96A4274, this.camera_B17F5367_A9EB_F770_41D7_8B4AA936B059); this.mainPlayList.set('selectedIndex', 31)",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.34,
                          "yaw": 7.5,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 69,
                             "class": "ImageResourceLevel",
                             "width": 72,
                             "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -3.75
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 4.46,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -174.01,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 35,
                             "class": "ImageResourceLevel",
                             "width": 37,
                             "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.17
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_BA3B36C8_A9FB_51B1_41D7_ECC83A0D5E39",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "toolTip": "ir",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584, this.camera_B164B379_A9EB_F750_41D8_B420C4015EF3); this.mainPlayList.set('selectedIndex', 33)",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.46,
                          "yaw": -174.01,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 70,
                             "class": "ImageResourceLevel",
                             "width": 74,
                             "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -3.17
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3000,
                         "class": "ImageResourceLevel",
                         "width": 6000,
                         "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_t.jpg",
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -167.61,
                   "backwardYaw": 7.5,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
                   "yaw": 1.39,
                   "backwardYaw": 170.07,
                   "distance": 1
                  }
                 ],
                 "mapLocations": [
                  {
                   "x": 620.65,
                   "y": 264.28,
                   "class": "PanoramaMapLocation",
                   "angle": 91.55,
                   "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
                 "label": "6-2018",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 3.99,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 1.39,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 31,
                          "class": "ImageResourceLevel",
                          "width": 33,
                          "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -3.71
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_BBF2F6B3_A9E7_31D0_41A3_1A3951B7B07F",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595, this.camera_B0B14F7F_A9EB_EF4F_41DB_4D27FDE86910); this.mainPlayList.set('selectedIndex', 30)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 3.99,
                       "yaw": 1.39,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 63,
                          "class": "ImageResourceLevel",
                          "width": 66,
                          "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -3.71
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 3.66,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -167.61,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 29,
                          "class": "ImageResourceLevel",
                          "width": 30,
                          "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.87
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_BAF4C22C_A9F9_50F0_41E3_225541C4D90A",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "toolTip": "ir",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF, this.camera_B0CF4F62_A9EB_EF71_41D7_25114CE78A85); this.mainPlayList.set('selectedIndex', 32)",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true
                      }
                     ],
                     "items": [
                      {
                       "hfov": 3.66,
                       "yaw": -167.61,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 61,
                          "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -2.87
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3000,
                      "class": "ImageResourceLevel",
                      "width": 6000,
                      "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "thumbnailUrl": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_t.jpg",
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 170.07,
                "backwardYaw": 1.39,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE",
                "yaw": 38.86,
                "backwardYaw": -161.16,
                "distance": 1
               }
              ],
              "mapLocations": [
               {
                "x": 860.89,
                "y": 196.6,
                "class": "PanoramaMapLocation",
                "angle": 93.65,
                "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
              "label": "5-2018",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 5.59,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 38.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 46,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.18
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_B886AD18_A9E9_30D1_41DD_9AE1B4FFA7F1",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_841FB58E_9651_8163_41B9_4845701F08EE, this.camera_B1A472B5_A9EB_F1D0_41DD_CB0896D4EB09); this.mainPlayList.set('selectedIndex', 29)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.59,
                    "yaw": 38.86,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 92,
                       "class": "ImageResourceLevel",
                       "width": 93,
                       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -7.18
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 4.3,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 170.07,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 38,
                       "class": "ImageResourceLevel",
                       "width": 36,
                       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.8
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_B86F8D91_A9E6_F3D0_419A_A829A87F66D3",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "toolTip": "ir",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_840052A4_964E_80A7_41DB_1236A96A4274, this.camera_B1BB82A3_A9EB_F1F0_41E1_3D6FEF8AEE00); this.mainPlayList.set('selectedIndex', 31)",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.3,
                    "yaw": 170.07,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 76,
                       "class": "ImageResourceLevel",
                       "width": 72,
                       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -5.8
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3000,
                   "class": "ImageResourceLevel",
                   "width": 6000,
                   "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": -161.16,
             "backwardYaw": 38.86,
             "distance": 1
            }
           ],
           "mapLocations": [
            {
             "x": 892.69,
             "y": 303.42,
             "class": "PanoramaMapLocation",
             "angle": 84.69,
             "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
           "label": "4-2018",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 3.88,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -0.45,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 33,
                    "class": "ImageResourceLevel",
                    "width": 32,
                    "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -4.15
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_B99512B1_A9EB_31D3_41CC_29C5317EC0A5",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D, this.camera_B1317E4E_A9EB_D0B0_41CE_10D3A3FC941B); this.mainPlayList.set('selectedIndex', 28)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 3.88,
                 "yaw": -0.45,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 66,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -4.15
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 3.78,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -161.16,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 31,
                    "class": "ImageResourceLevel",
                    "width": 31,
                    "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -4.96
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_B9D80AC0_A9EB_31B1_41CA_7E8FC34A19AC",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "toolTip": "ir",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595, this.camera_B126AE63_A9EB_D170_41CD_068295D57A03); this.mainPlayList.set('selectedIndex', 30)",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "items": [
                {
                 "hfov": 3.78,
                 "yaw": -161.16,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 63,
                    "class": "ImageResourceLevel",
                    "width": 63,
                    "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -4.96
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3000,
                "class": "ImageResourceLevel",
                "width": 6000,
                "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -161.03,
          "backwardYaw": -0.45,
          "distance": 1
         }
        ],
        "mapLocations": [
         {
          "x": 1131.38,
          "y": 288.5,
          "class": "PanoramaMapLocation",
          "angle": 78.18,
          "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
        "label": "3-2018",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "hfov": 4.1,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -9.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 34,
                 "class": "ImageResourceLevel",
                 "width": 34,
                 "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.71
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_A66EFC51_A9EF_5150_41E4_8877B0AEF9D7",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99, this.camera_B3FB7126_A9EB_F0F1_41E2_60B4C93455E5); this.mainPlayList.set('selectedIndex', 27)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 4.1,
              "yaw": -9.38,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 68,
                 "class": "ImageResourceLevel",
                 "width": 68,
                 "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.71
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 3.33,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -161.03,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 27,
                 "class": "ImageResourceLevel",
                 "width": 27,
                 "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.61
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_A644646E_A9E9_D170_41AA_E68EC7056046",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "toolTip": "ir",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_841FB58E_9651_8163_41B9_4845701F08EE, this.camera_B3EDD144_A9EB_F0B1_41D8_D92EDBBB215E); this.mainPlayList.set('selectedIndex', 29)",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true
             }
            ],
            "items": [
             {
              "hfov": 3.33,
              "yaw": -161.03,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 55,
                 "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -3.61
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -166.54,
       "backwardYaw": -9.38,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
       "yaw": 4.25,
       "backwardYaw": -136.03,
       "distance": 1
      }
     ],
     "mapLocations": [
      {
       "x": 1245.98,
       "y": 221.32,
       "class": "PanoramaMapLocation",
       "angle": 91.43,
       "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
     "label": "2-2018",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "hfov": 5.69,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 4.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.4
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_A762DCAF_A9EE_D1CF_41AD_B3C1F15E7AA7",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61, this.camera_B115CE8E_A9EB_D1B0_41BC_0975D5FF39F3); this.mainPlayList.set('selectedIndex', 26)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 5.69,
           "yaw": 4.25,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 91,
              "class": "ImageResourceLevel",
              "width": 95,
              "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -4.4
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 3.77,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -166.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 32,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.27
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_A721FD2F_A9EF_30F0_41E2_CC5C4B4C6D7C",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "ir",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D, this.camera_B12CCE77_A9EB_D150_41CE_D2FF4DFBC127); this.mainPlayList.set('selectedIndex', 28)",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true
          }
         ],
         "items": [
          {
           "hfov": 3.77,
           "yaw": -166.54,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 64,
              "class": "ImageResourceLevel",
              "width": 62,
              "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -1.27
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -136.03,
    "backwardYaw": 4.25,
    "distance": 1
   }
  ],
  "mapLocations": [
   {
    "x": 1333.15,
    "y": 236.16,
    "class": "PanoramaMapLocation",
    "angle": 87.14,
    "map": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174"
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
  "label": "1-2018",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 8.93,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -136.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 74,
           "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.37
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_A49D910B_A9E9_30B7_41C5_C9591AE84333",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "toolTip": "ir",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99, this.camera_B15823AE_A9EB_F7F0_41E0_32FDE623D15E); this.mainPlayList.set('selectedIndex', 27)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true
       }
      ],
      "items": [
       {
        "hfov": 8.93,
        "yaw": -136.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 121,
           "class": "ImageResourceLevel",
           "width": 149,
           "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.37
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_83899584_964E_8167_41CF_AD476F5C0371",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_83899584_964E_8167_41CF_AD476F5C0371_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_B1983D46_A9EB_D0B0_41A0_BCB8A5F7354C",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1983D46_A9EB_D0B0_41A0_BCB8A5F7354C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_B199AD47_A9EB_D0B0_41C5_3D02AA30D1D1",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B199AD47_A9EB_D0B0_41C5_3D02AA30D1D1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_B199FD48_A9EB_D0B0_41DB_A4C6C340889B",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B199FD48_A9EB_D0B0_41DB_A4C6C340889B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_B1996D49_A9EB_D0B0_41D3_82642485E4E2",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1996D49_A9EB_D0B0_41D3_82642485E4E2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_B186BD49_A9EB_D0B0_41D1_23AEAF8F43E3",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B186BD49_A9EB_D0B0_41D1_23AEAF8F43E3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_B186FD4A_A9EB_D0B0_41DC_37054892B11A",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B186FD4A_A9EB_D0B0_41DC_37054892B11A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_B1864D4B_A9EB_D0B0_41B3_801D73E9CEB3",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1864D4B_A9EB_D0B0_41B3_801D73E9CEB3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_B1879D4B_A9EB_D0B0_41CB_1FC6651A3B2F",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1879D4B_A9EB_D0B0_41CB_1FC6651A3B2F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_B187FD4C_A9EB_D0B0_41E0_5981C37ACD60",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B187FD4C_A9EB_D0B0_41E0_5981C37ACD60, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "id": "PanoramaPlayListItem_B1874D4D_A9EB_D0B0_41D4_6A7AAC0E3879",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1874D4D_A9EB_D0B0_41D4_6A7AAC0E3879, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "id": "PanoramaPlayListItem_B1849D4D_A9EB_D0B0_41DA_70DB83353A89",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1849D4D_A9EB_D0B0_41DA_70DB83353A89, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "id": "PanoramaPlayListItem_B184ED4E_A9EB_D0B0_41C7_73176F566BC1",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B184ED4E_A9EB_D0B0_41C7_73176F566BC1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "id": "PanoramaPlayListItem_B1842D4E_A9EB_D0B0_41D7_24649D28F75F",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1842D4E_A9EB_D0B0_41D7_24649D28F75F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "id": "PanoramaPlayListItem_B1847D4F_A9EB_D0B0_41E1_7EB5EB3DB331",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1847D4F_A9EB_D0B0_41E1_7EB5EB3DB331, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "id": "PanoramaPlayListItem_B185CD50_A9EB_D350_41B6_46B3616DD465",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B185CD50_A9EB_D350_41B6_46B3616DD465, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "id": "PanoramaPlayListItem_B1851D50_A9EB_D350_41DE_B8E98738CAED",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1851D50_A9EB_D350_41DE_B8E98738CAED, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "id": "PanoramaPlayListItem_B1857D51_A9EB_D350_41C4_88CB64F334B9",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1857D51_A9EB_D350_41C4_88CB64F334B9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "id": "PanoramaPlayListItem_B182CD52_A9EB_D350_41CD_56A1AC2E57DC",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B182CD52_A9EB_D350_41CD_56A1AC2E57DC, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "id": "PanoramaPlayListItem_B1822D52_A9EB_D350_41B9_AF8482E3CDBB",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1822D52_A9EB_D350_41B9_AF8482E3CDBB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "id": "PanoramaPlayListItem_B1826D53_A9EB_D350_41A3_31B596376873",
    "media": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
    "camera": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1826D53_A9EB_D350_41A3_31B596376873, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "id": "PanoramaPlayListItem_B183BD53_A9EB_D350_41C8_C0C352DD4DE0",
    "media": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
    "camera": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B183BD53_A9EB_D350_41C8_C0C352DD4DE0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "id": "PanoramaPlayListItem_B1831D54_A9EB_D350_41C8_4D860CFE8DE2",
    "media": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
    "camera": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1831D54_A9EB_D350_41C8_4D860CFE8DE2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "id": "PanoramaPlayListItem_B1836D55_A9EB_D350_41DB_1ADEB6B7E5B9",
    "media": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
    "camera": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1836D55_A9EB_D350_41DB_1ADEB6B7E5B9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "id": "PanoramaPlayListItem_B180CD55_A9EB_D350_41DD_AD8427104307",
    "media": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
    "camera": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B180CD55_A9EB_D350_41DD_AD8427104307, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "id": "PanoramaPlayListItem_B1802D56_A9EB_D350_41E3_A4FE3F03055C",
    "media": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
    "camera": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1802D56_A9EB_D350_41E3_A4FE3F03055C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "id": "PanoramaPlayListItem_B1807D57_A9EB_D350_41E3_310DAEEF6CD9",
    "media": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26",
    "camera": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1807D57_A9EB_D350_41E3_310DAEEF6CD9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "id": "PanoramaPlayListItem_B181DD57_A9EB_D350_41DA_6C19164D5FFF",
    "media": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
    "camera": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B181DD57_A9EB_D350_41DA_6C19164D5FFF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "id": "PanoramaPlayListItem_B1808D58_A9EB_D350_41D7_5FF743FE8835",
    "media": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
    "camera": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1808D58_A9EB_D350_41D7_5FF743FE8835, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "id": "PanoramaPlayListItem_B180DD59_A9EB_D350_41C7_6E23FCAD62F1",
    "media": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
    "camera": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B180DD59_A9EB_D350_41C7_6E23FCAD62F1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "id": "PanoramaPlayListItem_B1803D5A_A9EB_D350_41CB_CB11B90FCBC3",
    "media": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE",
    "camera": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1803D5A_A9EB_D350_41CB_CB11B90FCBC3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "id": "PanoramaPlayListItem_B1818D5A_A9EB_D350_4183_CBF0B304091A",
    "media": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
    "camera": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1818D5A_A9EB_D350_4183_CBF0B304091A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "id": "PanoramaPlayListItem_B181FD5B_A9EB_D350_41DB_5A63B4CC5043",
    "media": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274",
    "camera": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B181FD5B_A9EB_D350_41DB_5A63B4CC5043, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)"
   },
   {
    "id": "PanoramaPlayListItem_B1814D5C_A9EB_D350_41BC_B10B675C456A",
    "media": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
    "camera": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B1814D5C_A9EB_D350_41BC_B10B675C456A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "id": "PanoramaPlayListItem_B18E9D5C_A9EB_D350_41DB_6D0AB86A38F8",
    "media": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
    "camera": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B18E9D5C_A9EB_D350_41DB_6D0AB86A38F8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "id": "PanoramaPlayListItem_B18E0D5D_A9EB_D350_41C1_C493F1389209",
    "media": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C",
    "camera": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B18E0D5D_A9EB_D350_41C1_C493F1389209, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "id": "PanoramaPlayListItem_B18E5D5D_A9EB_D350_41DB_9BCC6354CFE1",
    "media": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
    "camera": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B18E5D5D_A9EB_D350_41DB_9BCC6354CFE1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)"
   },
   {
    "id": "PanoramaPlayListItem_B18FBD5E_A9EB_D350_41E1_DEA5302CC5D2",
    "media": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371",
    "camera": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371_camera",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B18FBD5E_A9EB_D350_41E1_DEA5302CC5D2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)"
   }
  ]
 },
 "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4",
 "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A",
 "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255",
 "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80",
 "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174",
 {
  "class": "PlayList",
  "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B6AC45FD_A5E7_F395_41DE_69BCE79449F4",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_AB055ABD_A5AE_9195_41C4_96BE1C72C42A",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A808CD36_A5AE_9097_41D0_4BA0FAA22255",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A80A9EFC_A5AE_919A_41BA_0ABE21983E80",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_A80B50FC_A5AF_719B_41D2_AB9F3F6B3174",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 0, 1)",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 1, 2)",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 2, 3)",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 3, 4)",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 4, 5)",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 5, 6)",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 6, 7)",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 7, 8)",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 8, 9)",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 9, 10)",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 10, 11)",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 11, 12)",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 12, 13)",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 13, 14)",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 14, 15)",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 15, 16)",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 16, 17)",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 17, 18)",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 18, 19)",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 19, 20)",
    "camera": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 20, 21)",
    "camera": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 21, 22)",
    "camera": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 22, 23)",
    "camera": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 23, 24)",
    "camera": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 24, 25)",
    "camera": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 25, 26)",
    "camera": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 26, 27)",
    "camera": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 27, 28)",
    "camera": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 28, 29)",
    "camera": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 29, 30)",
    "camera": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 30, 31)",
    "camera": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 31, 32)",
    "camera": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 32, 33)",
    "camera": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 33, 34)",
    "camera": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 34, 35)",
    "camera": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 35, 36)",
    "camera": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist, 36, 0)",
    "camera": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371"
   }
  ]
 },
 "this.Menu_B172BD6E_A9EB_D370_41DD_D6EDC9F506FD",
 {
  "class": "SlideInEffect",
  "id": "effect_B6B31F99_A59F_6F9D_41DE_BD690A10B4A5",
  "duration": 0,
  "from": "left",
  "easing": "linear"
 },
 {
  "class": "SlideOutEffect",
  "to": "right",
  "id": "effect_B6B0DF99_A59F_6F9D_41DF_0F88360DBE44",
  "duration": 0,
  "easing": "linear"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.62,
   "pitch": 0
  },
  "id": "camera_B1613DA8_A9EB_D3F0_41DE_E698FB9E652E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.61,
   "pitch": 0
  },
  "id": "camera_B16D3DB9_A9EB_D3D0_41E3_52BBE9BE2721",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.79,
   "pitch": 0
  },
  "id": "camera_B1571DCB_A9EB_D3B0_41E4_E74A1A47735B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.82,
   "pitch": 0
  },
  "id": "camera_B150ADDD_A9EB_D350_41B3_AC25F9BC14C8",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.53,
   "pitch": 0
  },
  "id": "camera_B15AADEE_A9EB_D370_41D3_7B65BC31AE07",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "timeToIdle": 25000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.65,
   "pitch": 0
  },
  "id": "camera_B1462E00_A9EB_D0B0_41AA_914269F625A0",
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "id": "sequence_B1463E00_A9EB_D0B0_4188_1D43FD707F60",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_B1463E00_A9EB_D0B0_4188_1D43FD707F60",
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.31,
   "pitch": 0
  },
  "id": "camera_B1405E13_A9EB_D0D0_41E3_1F4CD2D209FE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.05,
   "pitch": 0
  },
  "id": "camera_B14A5E27_A9EB_D0F0_41CC_272F9F71F0A1",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.28,
   "pitch": 0
  },
  "id": "camera_B137EE38_A9EB_D0D0_41E1_5DD8B18BBD24",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.97,
   "pitch": 0
  },
  "id": "camera_B1317E4E_A9EB_D0B0_41CE_10D3A3FC941B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.14,
   "pitch": 0
  },
  "id": "camera_B126AE63_A9EB_D170_41CD_068295D57A03",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.62,
   "pitch": 0
  },
  "id": "camera_B12CCE77_A9EB_D150_41CE_D2FF4DFBC127",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.97,
   "pitch": 0
  },
  "id": "camera_B115CE8E_A9EB_D1B0_41BC_0975D5FF39F3",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.76,
   "pitch": 0
  },
  "id": "camera_B119BEA8_A9EB_D1F0_41DB_9A5817D743F9",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.55,
   "pitch": 0
  },
  "id": "camera_B10DCEC3_A9EB_D1B0_41B3_BB6C24E1B58A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.56,
   "pitch": 0
  },
  "id": "camera_B0F0BEF4_A9EB_D150_41D8_2E5E18C3B471",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.03,
   "pitch": 0
  },
  "id": "camera_B0E55F12_A9EB_D0D0_41DD_A05959C063DF",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.73,
   "pitch": 0
  },
  "id": "camera_B0D68F29_A9EB_D0F0_41D3_C5DF6B7D04D3",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.75,
   "pitch": 0
  },
  "id": "camera_B0DB3F45_A9EB_D0B3_41A0_928911F4F250",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.5,
   "pitch": 0
  },
  "id": "camera_B0CF4F62_A9EB_EF71_41D7_25114CE78A85",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.93,
   "pitch": 0
  },
  "id": "camera_B0B14F7F_A9EB_EF4F_41DB_4D27FDE86910",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.63,
   "pitch": 0
  },
  "id": "camera_B0A3FF9C_A9EB_EFD1_41DF_C05F0152BFE6",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.12,
   "pitch": 0
  },
  "id": "camera_B0971FB4_A9EB_EFD1_41E1_07918ED72C4F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.38,
   "pitch": 0
  },
  "id": "camera_B099DFCF_A9EB_EF4F_41E4_1E263D3EB672",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.82,
   "pitch": 0
  },
  "id": "camera_B08D1FEB_A9EB_EF77_41DC_7A7B721EB66F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.24,
   "pitch": 0
  },
  "id": "camera_B07F0008_A9EB_F0B1_41AD_8EC4B74F2814",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.39,
   "pitch": 0
  },
  "id": "camera_B061D027_A9EB_F0FF_41D9_F1BFE6EA895E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.39,
   "pitch": 0
  },
  "id": "camera_B055B03F_A9EB_F0CF_41B7_C8FBDC0FDF83",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.99,
   "pitch": 0
  },
  "id": "camera_B046305D_A9EB_F153_41E3_9AEF9210E152",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.4,
   "pitch": 0
  },
  "id": "camera_B04A607F_A9EB_F14F_41E3_123F06842091",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.91,
   "pitch": 0
  },
  "id": "camera_B03C609D_A9EB_F1D3_41E4_5E0E7E38B9DB",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.16,
   "pitch": 0
  },
  "id": "camera_B021C0B9_A9EB_F1D3_41DA_C15D1E6D2232",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.47,
   "pitch": 0
  },
  "id": "camera_B01260D0_A9EB_F151_41E2_73F3AA9C7AC9",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.83,
   "pitch": 0
  },
  "id": "camera_B00440EC_A9EB_F171_41D0_96158CB4FBEB",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.12,
   "pitch": 0
  },
  "id": "camera_B009C109_A9EB_F0B3_41CF_502206784BCE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.46,
   "pitch": 0
  },
  "id": "camera_B3FB7126_A9EB_F0F1_41E2_60B4C93455E5",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.55,
   "pitch": 0
  },
  "id": "camera_B3EDD144_A9EB_F0B1_41D8_D92EDBBB215E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.79,
   "pitch": 0
  },
  "id": "camera_B3DF515D_A9EB_F353_41E2_8C5ECCBB86CE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.11,
   "pitch": 0
  },
  "id": "camera_B3C0417A_A9EB_F351_41E4_DF3C777AAC82",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 19.49,
   "pitch": 0
  },
  "id": "camera_B1CFA25B_A9EB_F157_41D8_F2A7E93D1AA7",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.53,
   "pitch": 0
  },
  "id": "camera_B1C8726D_A9EB_F173_41DF_9133ACB7274A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.31,
   "pitch": 0
  },
  "id": "camera_B1B47281_A9EB_F1B0_41BA_5A03BF4A2695",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.37,
   "pitch": 0
  },
  "id": "camera_B1BE5292_A9EB_F1D0_41CE_6AC0FB0E34AB",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.61,
   "pitch": 0
  },
  "id": "camera_B1BB82A3_A9EB_F1F0_41E1_3D6FEF8AEE00",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.84,
   "pitch": 0
  },
  "id": "camera_B1A472B5_A9EB_F1D0_41DD_CB0896D4EB09",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -165.43,
   "pitch": 0
  },
  "id": "camera_B1A1A2C6_A9EB_F1B0_41E0_F99A8F5435BD",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.68,
   "pitch": 0
  },
  "id": "camera_B1ABB2D8_A9EB_F150_41DC_A9B0F4FE3460",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.22,
   "pitch": 0
  },
  "id": "camera_B19592E9_A9EB_F170_41B4_5A39BADBA5DE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.36,
   "pitch": 0
  },
  "id": "camera_B19152FB_A9EB_F150_4147_070C4A30D824",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.34,
   "pitch": 0
  },
  "id": "camera_B19B030C_A9EB_F0B0_41D0_E4B31D625F2B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.36,
   "pitch": 0
  },
  "id": "camera_B184931E_A9EB_F0D0_41A2_6EF237BF917F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.91,
   "pitch": 0
  },
  "id": "camera_B1817331_A9EB_F0D0_41E2_BC95A3CDE6E3",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.96,
   "pitch": 0
  },
  "id": "camera_B18A3343_A9EB_F0B0_41DD_1B1EE6C611FE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.34,
   "pitch": 0
  },
  "id": "camera_B1742355_A9EB_F750_41D2_92FD13647F4F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.39,
   "pitch": 0
  },
  "id": "camera_B17F5367_A9EB_F770_41D7_8B4AA936B059",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.5,
   "pitch": 0
  },
  "id": "camera_B164B379_A9EB_F750_41D8_B420C4015EF3",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.56,
   "pitch": 0
  },
  "id": "camera_B16AD38B_A9EB_F7B0_41DC_1ADC485398FD",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.65,
   "pitch": 0
  },
  "id": "camera_B152139D_A9EB_F7D0_41AD_3EAFEC6499F4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.75,
   "pitch": 0
  },
  "id": "camera_B15823AE_A9EB_F7F0_41E0_32FDE623D15E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.11,
   "pitch": 0
  },
  "id": "camera_B14E53C0_A9EB_F7B0_41E4_05E5700E4353",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.85,
   "pitch": 0
  },
  "id": "camera_B137F3D1_A9EB_F750_41E2_22130CB062C4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -149.16,
   "pitch": 0
  },
  "id": "camera_B13D33E3_A9EB_F770_41C0_69264702DC95",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "playbackBarHeight": 10,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBottom": 5,
  "playbackBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderColor": "#000000",
  "progressBarOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "progressRight": 0,
  "toolTipFontWeight": "normal",
  "shadow": false,
  "progressHeight": 10,
  "toolTipShadowColor": "#333333",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderSize": 0,
  "toolTipOpacity": 1,
  "minWidth": 100,
  "progressBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingTop": 0,
  "playbackBarLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "class": "ViewerArea",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingTop": 4,
  "progressLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipTextShadowBlurRadius": 3,
  "width": "100%",
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "height": "100%",
  "toolTipShadowOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "top": 0,
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "id": "MainViewer",
  "playbackBarHeadHeight": 15,
  "playbackBarOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "left": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontSize": 12,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6"
 },
 {
  "class": "Container",
  "children": [
   {
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "width": "71.563%",
    "borderSize": 0,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "layout": "absolute",
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "gap": 10,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarMargin": 2,
    "top": "2.14%",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "id": "Container_9D38DE1F_906A_E3E0_41DC_6DF5B4C0F3B0",
    "height": "77.632%",
    "contentOpaque": false,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "backgroundOpacity": 1,
    "class": "Container",
    "right": "10.51%"
   },
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "width": "71.467%",
    "borderSize": 0,
    "minHeight": 1,
    "url": "https://sketchfab.com/models/a2b1588756994e33bc46eb32d6caaf73/embed",
    "paddingLeft": 0,
    "shadow": false,
    "scrollEnabled": true,
    "top": "2.62%",
    "paddingBottom": 0,
    "id": "WebFrame_9BA66844_906A_2061_41C2_C0313C07A6F2",
    "height": "77.632%",
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "insetBorder": false,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "backgroundOpacity": 1,
    "class": "WebFrame",
    "right": "9.97%"
   },
   {
    "verticalAlign": "middle",
    "maxHeight": 64,
    "right": "3.26%",
    "paddingRight": 0,
    "mode": "push",
    "width": 64,
    "height": 64,
    "borderSize": 0,
    "minHeight": 1,
    "transparencyActive": false,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "shadow": false,
    "top": "3.29%",
    "cursor": "hand",
    "click": "this.setComponentVisibility(this.Container_9D9B077E_9076_2021_41CC_D28EC763E3D2, false, 0, null, null, false)",
    "paddingBottom": 0,
    "id": "IconButton_8F7BFD36_A66E_9097_41D3_6A704F338E36",
    "maxWidth": 64,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_8F7BFD36_A66E_9097_41D3_6A704F338E36.png",
    "backgroundOpacity": 0,
    "class": "IconButton"
   }
  ],
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "width": "100%",
  "borderSize": 0,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "layout": "absolute",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "gap": 10,
  "overflow": "scroll",
  "shadow": false,
  "scrollBarMargin": 2,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "id": "Container_9D9B077E_9076_2021_41CC_D28EC763E3D2",
  "height": "100%",
  "contentOpaque": false,
  "minWidth": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundOpacity": 0.16
 },
 {
  "class": "Container",
  "children": [
   {
    "verticalAlign": "top",
    "children": [
     {
      "verticalAlign": "middle",
      "maxHeight": 64,
      "toolTipTextShadowBlurRadius": 3,
      "paddingRight": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingRight": 6,
      "mode": "push",
      "width": 53,
      "height": 52,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTip": "cerrar mapa",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontWeight": "normal",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "cursor": "hand",
      "toolTipBorderRadius": 3,
      "click": "this.setComponentVisibility(this.Container_9EE52C46_906A_2061_41AD_F1522FBDFB45, false, 0, null, null, false)",
      "paddingBottom": 0,
      "id": "IconButton_A8E2D584_A5A3_F06A_41DD_D474809E49CA",
      "maxWidth": 64,
      "toolTipShadowVerticalLength": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_A8E2D584_A5A3_F06A_41DD_D474809E49CA.png",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowBlurRadius": 3,
      "class": "IconButton",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6"
     },
     "this.IconButton_ABF37345_A5A5_90F5_41C4_A69638B69916",
     "this.IconButton_AB5F9B3D_A5A6_909A_41D6_66829674167D"
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "width": "15%",
    "borderSize": 0,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "layout": "vertical",
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "gap": 10,
    "overflow": "hidden",
    "shadow": false,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "id": "Container_AAD7FA28_A5A2_90BB_41D8_1D0D269B98ED",
    "height": "90.05%",
    "contentOpaque": false,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "backgroundOpacity": 0.05,
    "class": "Container"
   },
   {
    "verticalAlign": "top",
    "children": [
     "this.MapViewer",
     {
      "selectedPopUpBackgroundColor": "#333333",
      "class": "DropDown",
      "playList": "this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
      "popUpBorderRadius": 0,
      "backgroundColor": [
       "#333333",
       "#000000"
      ],
      "popUpFontColor": "#000000",
      "fontSize": 14,
      "paddingRight": 5,
      "arrowBeforeLabel": false,
      "borderSize": 0,
      "minHeight": 20,
      "gap": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "paddingLeft": 5,
      "popUpBackgroundOpacity": 0.84,
      "fontStyle": "normal",
      "width": "29.586%",
      "popUpShadowBlurRadius": 6,
      "shadow": false,
      "fontColor": "#FFFFFF",
      "arrowColor": "#FFFFFF",
      "popUpShadowOpacity": 0,
      "paddingBottom": 0,
      "bottom": "1.42%",
      "rollOverPopUpBackgroundColor": "#FFFFFF",
      "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655",
      "popUpShadow": false,
      "popUpBackgroundColor": "#999999",
      "fontWeight": "normal",
      "popUpShadowColor": "#000000",
      "popUpShadowSpread": 1,
      "minWidth": 100,
      "selectedPopUpFontColor": "#FFFFFF",
      "borderRadius": 4,
      "height": "10%",
      "paddingTop": 0,
      "left": "3.2%",
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [
       0,
       1
      ],
      "backgroundOpacity": 0.84
     }
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "width": "82.805%",
    "borderSize": 0,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "layout": "absolute",
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "gap": 10,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "id": "Container_AA2A8FBA_A5A3_AF9F_41E0_11DA2E8DD9C3",
    "height": "100%",
    "contentOpaque": false,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "backgroundOpacity": 0.05,
    "class": "Container"
   }
  ],
  "maxHeight": 500,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "width": "40%",
  "borderSize": 0,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "layout": "horizontal",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "gap": 3,
  "overflow": "visible",
  "shadow": false,
  "scrollBarMargin": 2,
  "top": "11.67%",
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "id": "Container_9EE52C46_906A_2061_41AD_F1522FBDFB45",
  "height": "33%",
  "contentOpaque": false,
  "minWidth": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "left": "1.04%",
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundOpacity": 0.1
 },
 {
  "verticalAlign": "middle",
  "children": [
   {
    "verticalAlign": "middle",
    "children": [
     {
      "verticalAlign": "middle",
      "maxHeight": 64,
      "toolTipTextShadowBlurRadius": 3,
      "paddingRight": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingRight": 6,
      "mode": "push",
      "width": 64,
      "height": 64,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTip": "Anterior",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontWeight": "normal",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "cursor": "hand",
      "toolTipBorderRadius": 3,
      "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
      "paddingBottom": 0,
      "id": "IconButton_AAEDD7E8_A579_5627_41B1_9A6D9E1973D9",
      "maxWidth": 64,
      "toolTipShadowVerticalLength": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_AAEDD7E8_A579_5627_41B1_9A6D9E1973D9.png",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowBlurRadius": 3,
      "class": "IconButton",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6"
     },
     {
      "verticalAlign": "top",
      "itemLabelFontColor": "#FFFFFF",
      "itemOpacity": 1,
      "backgroundColor": [
       "#000000"
      ],
      "selectedItemBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "itemLabelFontFamily": "Arial",
      "gap": 8,
      "itemThumbnailShadowSpread": 1,
      "selectedItemBorderSize": 2,
      "itemThumbnailBorderRadius": 0,
      "horizontalAlign": "left",
      "itemPaddingRight": 3,
      "rollOverItemBackgroundColorRatios": [
       0.16
      ],
      "selectedItemLabelFontWeight": "bold",
      "itemThumbnailShadowBlurRadius": 100,
      "shadow": false,
      "itemBackgroundOpacity": 0,
      "itemPaddingBottom": 3,
      "itemLabelFontWeight": "normal",
      "selectedItemBorderRadius": 0,
      "rollOverItemBorderColor": "#00FF00",
      "itemBorderRadius": 0,
      "paddingBottom": 0,
      "itemLabelFontStyle": "normal",
      "itemBackgroundColorRatios": [
       0.22
      ],
      "itemThumbnailOpacity": 1,
      "minWidth": 22,
      "selectedItemBackgroundColorRatios": [
       0,
       0.1
      ],
      "itemBackgroundColorDirection": "vertical",
      "scrollBarVisible": "always",
      "itemLabelFontSize": 14,
      "backgroundColorDirection": "vertical",
      "itemLabelHorizontalAlign": "center",
      "paddingTop": 0,
      "itemMode": "normal",
      "playList": "this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist",
      "backgroundColorRatios": [
       0
      ],
      "selectedItemBorderColor": "#FFFF00",
      "class": "ThumbnailList",
      "scrollBarOpacity": 0.5,
      "itemBackgroundColor": [
       "#000000"
      ],
      "itemPaddingTop": 3,
      "rollOverItemBackgroundOpacity": 1,
      "height": 86,
      "width": "71.207%",
      "borderSize": 0,
      "minHeight": 22,
      "itemPaddingLeft": 3,
      "itemLabelPosition": "bottom",
      "itemVerticalAlign": "middle",
      "paddingLeft": 0,
      "selectedItemLabelFontColor": "#CCCCCC",
      "itemLabelGap": 5,
      "rollOverItemBackgroundColor": [
       "#00FF99"
      ],
      "scrollBarWidth": 5,
      "itemThumbnailShadowVerticalLength": 1,
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "itemThumbnailShadow": true,
      "selectedItemBackgroundColor": [
       "#000000",
       "#FFFF00"
      ],
      "itemLabelTextDecoration": "none",
      "scrollBarColor": "#99FFCC",
      "itemThumbnailShadowOpacity": 1,
      "itemThumbnailScaleMode": "fit_outside",
      "id": "ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76",
      "itemThumbnailShadowColor": "#000000",
      "itemThumbnailShadowHorizontalLength": 0,
      "itemHorizontalAlign": "center",
      "itemThumbnailHeight": 58,
      "borderRadius": 5,
      "backgroundOpacity": 0.24,
      "rollOverItemLabelFontWeight": "normal",
      "selectedItemBackgroundOpacity": 0.68
     },
     {
      "verticalAlign": "middle",
      "maxHeight": 64,
      "toolTipTextShadowBlurRadius": 3,
      "paddingRight": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingRight": 6,
      "mode": "push",
      "width": 64,
      "height": 63,
      "borderSize": 0,
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTip": "Siguiente",
      "transparencyActive": false,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontWeight": "normal",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "cursor": "hand",
      "toolTipBorderRadius": 3,
      "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
      "paddingBottom": 0,
      "id": "IconButton_AA151248_A579_4E67_41CB_BDD988046918",
      "maxWidth": 64,
      "toolTipShadowVerticalLength": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_AA151248_A579_4E67_41CB_BDD988046918.png",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowBlurRadius": 3,
      "class": "IconButton",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6"
     }
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "width": "56.466%",
    "borderSize": 0,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "gap": 10,
    "overflow": "visible",
    "shadow": false,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "id": "Container_AB06D75A_A54F_761B_41A8_CEB7E933B08B",
    "height": "100%",
    "contentOpaque": false,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "backgroundOpacity": 0.3,
    "class": "Container"
   },
   {
    "verticalAlign": "middle",
    "children": [
     {
      "verticalAlign": "middle",
      "maxHeight": 128,
      "toolTipTextShadowBlurRadius": 3,
      "paddingRight": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingRight": 6,
      "width": 55,
      "height": 39,
      "mode": "toggle",
      "borderSize": 0,
      "minHeight": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "toolTip": "pantalla completa",
      "transparencyActive": true,
      "paddingLeft": 0,
      "toolTipFontColor": "#606060",
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipTextShadowColor": "#000000",
      "toolTipFontWeight": "normal",
      "shadow": false,
      "toolTipShadowColor": "#333333",
      "cursor": "hand",
      "toolTipBorderRadius": 3,
      "paddingBottom": 0,
      "id": "IconButton_B4CB1BEB_A539_7E39_41E2_5A3545C61451",
      "maxWidth": 128,
      "toolTipShadowVerticalLength": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "toolTipOpacity": 1,
      "iconURL": "skin/IconButton_B4CB1BEB_A539_7E39_41E2_5A3545C61451.png",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipShadowSpread": 0,
      "backgroundOpacity": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowBlurRadius": 3,
      "class": "IconButton",
      "toolTipBorderColor": "#767676",
      "toolTipBackgroundColor": "#F6F6F6"
     },
     "this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4"
    ],
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": "20.492%",
    "borderSize": 0,
    "minHeight": 1,
    "gap": 25,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "id": "Container_AB42C624_A54F_D62F_41E0_E8E040163596",
    "height": "100%",
    "contentOpaque": false,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "class": "Container"
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "100%",
  "borderSize": 0,
  "minHeight": 1,
  "gap": 10,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "horizontalAlign": "right",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "bottom": "0.82%",
  "id": "Container_AB487440_A54A_CA67_41DA_4F99CC15B047",
  "height": "15%",
  "contentOpaque": false,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "left": "0.54%",
  "backgroundOpacity": 0,
  "class": "Container"
 },
 {
  "verticalAlign": "middle",
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 64,
    "toolTipTextShadowBlurRadius": 3,
    "paddingRight": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingRight": 6,
    "mode": "toggle",
    "width": 64,
    "height": 64,
    "borderSize": 0,
    "minHeight": 1,
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderSize": 1,
    "toolTip": "abrir/cerrar mapa",
    "transparencyActive": false,
    "paddingLeft": 0,
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "horizontalAlign": "center",
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontStyle": "normal",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontWeight": "normal",
    "shadow": false,
    "toolTipShadowColor": "#333333",
    "cursor": "hand",
    "toolTipBorderRadius": 3,
    "click": "if(!this.Container_9EE52C46_906A_2061_41AD_F1522FBDFB45.get('visible')){ this.setComponentVisibility(this.Container_9EE52C46_906A_2061_41AD_F1522FBDFB45, true, 0, this.effect_B6B31F99_A59F_6F9D_41DE_BD690A10B4A5, 'showEffect', false) } else if(this.Container_9EE52C46_906A_2061_41AD_F1522FBDFB45.get('visible')){ this.setComponentVisibility(this.Container_9EE52C46_906A_2061_41AD_F1522FBDFB45, false, 0, this.effect_B6B0DF99_A59F_6F9D_41DF_0F88360DBE44, 'hideEffect', false) }",
    "paddingBottom": 0,
    "id": "IconButton_B7218663_A59E_90AD_41D0_C5BB11C069C4",
    "maxWidth": 64,
    "toolTipShadowVerticalLength": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "toolTipOpacity": 1,
    "iconURL": "skin/IconButton_B7218663_A59E_90AD_41D0_C5BB11C069C4.png",
    "toolTipFontSize": 12,
    "toolTipPaddingBottom": 4,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowBlurRadius": 3,
    "class": "IconButton",
    "toolTipBorderColor": "#767676",
    "toolTipBackgroundColor": "#F6F6F6"
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": "6.25%",
  "borderSize": 0,
  "minHeight": 1,
  "gap": 10,
  "scrollBarWidth": 10,
  "layout": "vertical",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "top": "1.32%",
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "id": "Container_B57B8C65_A549_3A28_41A3_D2E1BAB4E39D",
  "height": "11.513%",
  "contentOpaque": false,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "left": "0.53%",
  "backgroundOpacity": 0,
  "class": "Container"
 },
 {
  "verticalAlign": "middle",
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 52,
    "toolTipTextShadowBlurRadius": 3,
    "paddingRight": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingRight": 6,
    "width": 53,
    "height": 52,
    "mode": "push",
    "borderSize": 0,
    "minHeight": 1,
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderSize": 1,
    "toolTip": "compartir en facebook",
    "transparencyActive": true,
    "paddingLeft": 0,
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "horizontalAlign": "center",
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontStyle": "normal",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontWeight": "normal",
    "shadow": false,
    "toolTipShadowColor": "#333333",
    "cursor": "hand",
    "toolTipBorderRadius": 3,
    "click": "this.shareFacebook(location.href)",
    "paddingBottom": 0,
    "id": "IconButton_85434EB4_A5A2_B1AB_41D8_64D6C68F18C1",
    "maxWidth": 53,
    "toolTipShadowVerticalLength": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "toolTipOpacity": 1,
    "iconURL": "skin/IconButton_85434EB4_A5A2_B1AB_41D8_64D6C68F18C1.png",
    "toolTipFontSize": 12,
    "toolTipPaddingBottom": 4,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowBlurRadius": 3,
    "class": "IconButton",
    "toolTipBorderColor": "#767676",
    "toolTipBackgroundColor": "#F6F6F6"
   },
   {
    "verticalAlign": "middle",
    "maxHeight": 35,
    "toolTipTextShadowBlurRadius": 3,
    "paddingRight": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingRight": 6,
    "width": 35,
    "height": 35,
    "mode": "push",
    "borderSize": 0,
    "minHeight": 1,
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderSize": 1,
    "toolTip": "compartir en twitter",
    "transparencyActive": true,
    "paddingLeft": 0,
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "horizontalAlign": "center",
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontStyle": "normal",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontWeight": "normal",
    "shadow": false,
    "toolTipShadowColor": "#333333",
    "cursor": "hand",
    "toolTipBorderRadius": 3,
    "click": "this.shareTwitter(location.href)",
    "paddingBottom": 0,
    "id": "IconButton_87DE32C4_A5A5_B1EB_41D1_436E808E3918",
    "maxWidth": 35,
    "toolTipShadowVerticalLength": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "toolTipOpacity": 1,
    "iconURL": "skin/IconButton_87DE32C4_A5A5_B1EB_41D1_436E808E3918.png",
    "toolTipFontSize": 12,
    "toolTipPaddingBottom": 4,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowBlurRadius": 3,
    "class": "IconButton",
    "toolTipBorderColor": "#767676",
    "toolTipBackgroundColor": "#F6F6F6"
   },
   {
    "verticalAlign": "middle",
    "maxHeight": 64,
    "toolTipTextShadowBlurRadius": 3,
    "paddingRight": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingRight": 6,
    "mode": "push",
    "width": 64,
    "height": 64,
    "borderSize": 0,
    "minHeight": 1,
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderSize": 1,
    "toolTip": "Ayuda",
    "transparencyActive": false,
    "paddingLeft": 0,
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "horizontalAlign": "center",
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipFontStyle": "normal",
    "toolTipTextShadowColor": "#000000",
    "toolTipFontWeight": "normal",
    "shadow": false,
    "toolTipShadowColor": "#333333",
    "cursor": "hand",
    "toolTipBorderRadius": 3,
    "click": "this.setComponentVisibility(this.Container_856FC1D3_A5BF_93ED_41C4_EE095A6EDFC3, true, 0, null, null, false)",
    "paddingBottom": 0,
    "id": "IconButton_B55A8731_A549_3629_4193_CF8CCD473AA6",
    "maxWidth": 64,
    "toolTipShadowVerticalLength": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "toolTipOpacity": 1,
    "iconURL": "skin/IconButton_B55A8731_A549_3629_4193_CF8CCD473AA6.png",
    "toolTipFontSize": 12,
    "toolTipPaddingBottom": 4,
    "toolTipShadowSpread": 0,
    "backgroundOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowBlurRadius": 3,
    "class": "IconButton",
    "toolTipBorderColor": "#767676",
    "toolTipBackgroundColor": "#F6F6F6"
   }
  ],
  "scrollBarOpacity": 0,
  "paddingRight": 0,
  "width": "20%",
  "borderSize": 0,
  "minHeight": 1,
  "gap": 15,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "overflow": "scroll",
  "shadow": false,
  "scrollBarMargin": 2,
  "top": "84.05%",
  "scrollBarColor": "#FF0000",
  "paddingBottom": 0,
  "bottom": "0.99%",
  "id": "Container_A80AE426_A54E_CA2B_41BB_80EC4E6E4114",
  "contentOpaque": false,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "left": "2.36%",
  "backgroundOpacity": 0,
  "class": "Container"
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     {
      "verticalAlign": "middle",
      "maxHeight": 64,
      "right": "0%",
      "paddingRight": 0,
      "mode": "push",
      "width": 64,
      "height": 64,
      "borderSize": 0,
      "minHeight": 1,
      "transparencyActive": false,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "shadow": false,
      "top": "0.99%",
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_856FC1D3_A5BF_93ED_41C4_EE095A6EDFC3, false, 0, null, null, false)",
      "paddingBottom": 0,
      "id": "IconButton_87AC328C_A5A5_707B_41BE_8EAF8BA615BF",
      "maxWidth": 64,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "iconURL": "skin/IconButton_87AC328C_A5A5_707B_41BE_8EAF8BA615BF.png",
      "backgroundOpacity": 0,
      "class": "IconButton"
     },
     {
      "verticalAlign": "top",
      "maxHeight": 720,
      "paddingRight": 0,
      "width": "93.707%",
      "borderSize": 0,
      "minHeight": 1,
      "url": "skin/Image_849D0735_A662_90AA_41B8_1B7703EA6FC0.png",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "shadow": false,
      "top": "0%",
      "paddingBottom": 0,
      "id": "Image_849D0735_A662_90AA_41B8_1B7703EA6FC0",
      "height": "95.382%",
      "maxWidth": 1280,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "left": "0.09%",
      "backgroundOpacity": 0,
      "class": "Image"
     }
    ],
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "verticalAlign": "top",
    "paddingRight": 0,
    "width": "94.08%",
    "borderSize": 0,
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "layout": "absolute",
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "gap": 10,
    "overflow": "scroll",
    "shadow": false,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "bottom": "0%",
    "id": "Container_8707DC37_A5BE_9096_41E4_696FE10C9DE8",
    "height": "95.586%",
    "contentOpaque": false,
    "minWidth": 1,
    "borderRadius": 0,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 0.46,
    "right": "2.59%"
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "width": "99.094%",
  "borderSize": 0,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "layout": "absolute",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "gap": 10,
  "overflow": "scroll",
  "shadow": false,
  "scrollBarMargin": 2,
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "bottom": "0%",
  "id": "Container_856FC1D3_A5BF_93ED_41C4_EE095A6EDFC3",
  "height": "99.671%",
  "contentOpaque": false,
  "minWidth": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundOpacity": 0.36,
  "right": "0.18%"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist,this.ThumbnailList_ABD5BFCB_A549_F679_41B2_B4FB45878F76_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B4CB1BEB_A539_7E39_41E2_5A3545C61451].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_B4CB1BEB_A539_7E39_41E2_5A3545C61451",
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "borderSize": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "gap": 10,
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "minWidth": 20,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "mouseWheelEnabled": true
})