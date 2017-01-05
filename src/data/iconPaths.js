const iconPaths = {
  codepen: 'M123.429 668l344.571 229.714v-205.143l-190.857-127.429zM88 585.714l110.286-73.714-110.286-73.714v147.429zM556 897.714l344.571-229.714-153.714-102.857-190.857 127.429v205.143zM512 616l155.429-104-155.429-104-155.429 104zM277.143 458.857l190.857-127.429v-205.143l-344.571 229.714zM825.714 512l110.286 73.714v-147.429zM746.857 458.857l153.714-102.857-344.571-229.714v205.143zM1024 356v312c0 14.286-7.429 28.571-19.429 36.571l-468 312c-7.429 4.571-16 7.429-24.571 7.429s-17.143-2.857-24.571-7.429l-468-312c-12-8-19.429-22.286-19.429-36.571v-312c0-14.286 7.429-28.571 19.429-36.571l468-312c7.429-4.571 16-7.429 24.571-7.429s17.143 2.857 24.571 7.429l468 312c12 8 19.429 22.286 19.429 36.571z',
  github: 'M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z',
  gulp: 'M646.912 829.44l27.136-46.336s-61.696 25.28-164.992 25.28c-103.296 0-164.096-24.32-164.096-24.32l30.4 50.56 10.752 159.36c0 17.28 56.192 30.72 125.44 30.72 69.376 0 125.568-13.44 125.568-30.72l9.792-163.84zM673.152 528.32c-32.832 1.92-49.28 38.592-65.792 77.12-6.080 14.080-26.88 74.24-40.512 66.816s17.664-56.832 26.432-86.208c-10.112 7.424-47.232 36.288-56.768 9.216-15.36 13.44-48.256 20.48-44.544-14.080-8.192 14.72-26.56 35.2-48.64 26.24-28.8-10.88 16.832-103.040 28.16-98.56 11.392 5.12-2.24 25.6-5.76 33.92-7.936 17.92-17.024 40.96-10.88 45.44 10.24 8.32 38.592-30.080 39.232-30.72 5.312-7.040 20.48-52.48 32.64-47.36 12.16 5.76-30.4 65.92-14.528 78.080 3.2 2.56 16.32-1.28 24.32-10.24 5.12-5.12 3.328-17.92 20.48-58.88 17.28-40.96 32.64-92.16 44.416-88.32s2.048 30.080-2.176 40.32c-19.84 46.080-54.208 121.6-38.016 115.84 16-5.76 24.32-5.76 40.32-24.32s14.72-49.28 25.6-48.64c10.24 0.64 8.96 10.88 6.4 17.92 10.24-11.52 49.28-37.12 58.24-12.16 10.88 29.44-55.68 72.32-39.040 69.76 16-1.92 42.24-18.56 53.76-33.92l30.72-277.76s-31.36 25.6-229.12 25.6-225.92-24.96-225.92-24.96l26.24 253.44c14.080-39.68 47.36-120.32 99.2-117.12 23.68 1.28 55.68 47.36 28.16 48.64-11.52 0.64-12.8-23.040-26.24-26.24-10.24-1.92-23.68 5.76-32.64 14.72-17.28 17.28-55.68 85.76-50.56 119.68 6.4 43.52 60.16-14.72 69.12-32 6.4-12.16 10.88-48.64 24.32-44.8 14.080 3.84-1.28 41.6-11.52 74.24-11.52 37.12-17.28 76.16-31.36 71.68s8.96-52.48 7.68-60.8c-13.44 12.8-37.76 43.52-69.76 28.16l16 158.080s43.52 33.92 174.080 33.92 176-33.92 176-33.92l20.48-183.040c-16.64 16.64-69.12 45.44-72.32 12.8-2.56-26.24 56.96-64 41.6-64.64zM741.184 26.816v-1.28c2.56-3.84-1.92-12.16-10.24-18.56-8.256-7.040-17.28-10.24-20.224-6.4l-120.768 128-23.936 97.28c-17.984-0.64-35.968-0.64-54.016-0.64-127.232 0-230.4 14.72-230.4 32.64s103.168 32.64 230.4 32.64c127.232 0 230.4-14.464 230.4-32.384 0-13.184-55.936-24.512-136.32-29.632l20.736-81.28 113.664-119.68zM576.64 275.2s-22.4 0-26.112-3.456c-0.96-1.024-1.536-2.432-1.536-3.84 0-2.432 1.664-3.84 3.84-4.672l1.92 3.2c-0.896 0.256-1.28 0.64-1.408 0.96 0 1.792 13.44 3.008 23.68 2.88s22.72-1.024 22.784-2.752c0-0.512-0.96-1.024-2.56-1.408l1.92-3.072c2.688 0.832 4.992 2.432 4.992 5.12 0 4.736-6.016 5.504-9.856 6.016-4.608 0.64-17.6 1.024-17.6 1.024z',
  jekyll: 'M344.448 1024c-14.848 0-29.44-2.688-43.52-8.064-58.688-22.4-89.728-86.144-73.6-145.152l-0.64-0.32 3.84-9.6 298.496-775.104c4.48-11.52 2.368-38.848 0.256-54.080-0.64-3.584-0.64-6.848 0.32-10.24l0.32-0.96 0.256-0.64v-0.32l0.384-0.768c4.608-12.48 19.2-18.752 43.072-18.752 28.672 0 68.288 8.96 108.8 24.448 34.048 13.12 65.024 29.44 86.784 45.888 25.6 19.2 35.84 36.48 30.080 51.2l-1.28 1.92-0.64 0.64c-1.92 2.56-3.84 5.12-6.4 7.040-13.44 11.52-32.64 31.36-35.84 40.32l-301.376 785.984-0.64-0.256c-21.12 40.448-62.208 66.368-108.48 66.56h-0.32zM251.136 865.408l-0.896 2.112c-19.072 51.2 6.912 109.056 58.24 128.768 11.52 4.48 23.488 6.528 35.712 6.528 41.408 0 78.080-24.96 93.312-64l1.152-2.56 296.96-771.84c6.208-16.64 35.84-43.52 41.728-48.64l0.64-0.64c0.512-0.64 0.832-0.64 0.832-1.28 0-2.56-2.56-11.52-23.68-27.52-20.48-15.36-49.28-30.72-81.28-42.88-37.056-14.016-75.456-22.976-101.056-22.976-16.64 0-22.4 3.456-23.232 5.376v1.664c0.64 4.48 6.272 44.16-1.472 64.64l-296.96 773.12zM632.96 374.4s-41.088 47.36-78.592 64.384c-37.568 17.024-65.28 12.544-99.008 32.256-33.664 19.648-50.688 47.040-50.688 47.040l-137.152 356.8c-14.848 40.32 7.168 87.424 48 103.232 40.96 15.808 87.040-5.12 102.912-45.056l214.528-558.656zM422.592 800.448c4.48-1.792 9.6 0 11.328 4.48 1.792 4.48 0 9.472-4.48 11.264s-9.6 0-11.328-4.48c-1.792-4.16 0-9.216 4.48-11.264zM379.328 723.52c-6.528 2.944-14.272 0-16.96-6.592-3.008-6.528 0-14.272 6.528-16.96 6.592-3.008 14.336 0 17.024 6.528 3.2 6.4 0.32 13.44-6.592 16.64zM391.488 676.8c-5.248-12.288 0-26.624 12.288-32.32 12.16-5.312 26.24 0 32 12.16 5.12 12.288 0 26.624-12.16 32.256-12.8 5.376-26.88 0-32.64-12.16zM495.040 580.48c6.528-3.2 14.272 0 16.96 6.4 3.008 6.592 0 14.336-6.528 17.024-6.592 3.008-14.336 0-17.024-6.592-3.2-6.528 0-14.272 6.592-16.96zM439.872 521.6c4.48-1.792 9.6 0 11.328 4.48 1.792 4.48 0 9.6-4.48 11.328-4.48 1.792-9.6 0-11.328-4.48-1.792-4.48 0.32-9.6 4.48-11.328zM583.68 48.64c4.224-11.136 42.368-6.912 85.12 9.6 42.624 16.384 73.792 38.784 69.504 49.92-4.352 11.264-42.496 7.040-85.12-9.344-42.88-16.448-73.984-38.848-69.632-50.176z',
  // linkedin: 'M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z',
  sass: 'M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512-512-229.248-512-512 229.248-512 512-512zM410.24 682.56c7.488 27.52 6.656 53.248-1.024 76.48l-2.816 7.68c-1.024 2.56-2.176 5.12-3.328 7.488-5.952 12.352-13.888 23.872-23.68 34.56-29.76 32.384-71.296 44.672-89.152 34.304-19.2-11.136-9.6-56.96 24.96-93.44 37.12-39.168 90.432-64.384 90.432-64.384v-0.128l4.608-2.56zM833.152 219.2c-23.168-91.008-173.952-120.96-316.672-70.208-84.928 30.208-176.832 77.568-242.944 139.392-78.592 73.472-91.136 137.472-86.016 164.224 18.24 94.336 147.52 156.032 200.704 201.792v0.256c-15.68 7.68-130.368 65.28-157.248 124.8-28.8 62.72 4.48 107.52 26.24 113.28 67.2 18.56 136.32-15.36 173.44-70.4 35.84-53.76 32.64-122.88 17.28-156.8 21.12-5.76 46.080-8.32 78.080-4.48 89.6 10.24 107.52 66.56 103.68 89.6s-22.4 36.48-28.8 40.32c-6.4 3.84-8.32 5.12-7.68 7.68 0.64 3.84 3.84 3.84 8.96 3.2 7.040-1.28 46.72-19.2 48.64-62.72 1.92-55.040-50.56-116.48-144-115.2-38.4 0.64-62.72 3.84-80 10.88-1.28-1.92-2.56-3.2-4.48-4.48-57.6-62.080-164.48-105.6-160-188.16 1.28-30.080 12.16-109.44 204.8-205.44 158.080-78.72 284.16-56.96 305.92-8.96 31.36 68.48-67.2 195.84-231.68 214.4-62.72 7.040-95.36-17.28-103.68-26.24-8.96-9.6-10.24-10.24-13.44-8.32-5.12 2.56-1.92 10.88 0 16 5.12 12.8 24.96 35.2 59.52 46.72 30.080 9.6 103.68 15.36 192-19.2 99.2-38.4 176.64-145.28 154.24-234.88z',
  wordpress: 'M72.571 512c0-63.429 13.714-124 38.286-178.857l209.714 574.286c-146.857-71.429-248-221.714-248-395.429zM808.571 489.714c0 37.714-15.429 81.143-33.714 142.286l-43.429 146.286-158.857-472s26.286-1.714 50.286-4.571c23.429-2.857 20.571-37.714-2.857-36-71.429 5.143-117.143 5.714-117.143 5.714s-42.857-0.571-115.429-5.714c-24-1.714-26.857 34.286-2.857 36 22.286 2.286 45.714 4.571 45.714 4.571l68.571 187.429-96 288-160-475.429s26.286-1.714 50.286-4.571c23.429-2.857 20.571-37.714-2.857-36-70.857 5.143-117.143 5.714-117.143 5.714-8 0-17.714-0.571-28-0.571 78.286-119.429 213.143-198.286 366.857-198.286 114.286 0 218.286 44 296.571 115.429h-5.714c-42.857 0-73.714 37.143-73.714 77.714 0 36 21.143 66.286 43.429 102.857 17.143 29.143 36 66.857 36 121.143zM519.429 550.286l135.429 369.714c0.571 2.286 1.714 4.571 2.857 6.286-45.714 16-94.286 25.143-145.714 25.143-42.857 0-84.571-6.286-124-18.286zM897.143 301.143c34.286 62.857 54.286 134.286 54.286 210.857 0 162.286-88 303.429-218.857 379.429l134.286-387.429c22.286-64 33.714-113.143 33.714-157.714 0-16-1.143-30.857-3.429-45.143zM512 0c282.286 0 512 229.714 512 512s-229.714 512-512 512-512-229.714-512-512 229.714-512 512-512zM512 1000.571c269.143 0 488.571-219.429 488.571-488.571s-219.429-488.571-488.571-488.571-488.571 219.429-488.571 488.571 219.429 488.571 488.571 488.571z',
  react: 'M512.448 169.6l0.448-0.512c21.312-20.48 43.84-39.68 67.968-56.768 9.472-6.72 19.2-13.12 29.248-19.2 8.704-5.12 17.6-9.92 26.688-14.336 7.040-3.2 14.080-6.4 21.312-8.96 6.4-2.56 13.12-4.48 19.84-6.4 10.24-2.56 20.608-5.12 31.168-5.76h11.648c3.008 0 6.016 0 8.96 0.64 6.4 0.64 12.8 1.92 19.008 3.84 5.12 1.92 10.24 3.84 15.36 6.4 3.2 1.92 5.76 3.84 8.96 5.76 5.12 3.84 9.6 7.68 13.44 12.16 3.2 4.48 7.040 8.32 9.6 12.8 6.4 10.24 11.52 21.12 15.36 32 1.28 3.2 1.92 6.4 3.2 10.24 1.28 4.48 1.92 8.96 3.2 13.44 1.28 5.76 1.92 11.52 3.2 17.28l1.92 21.76c0.64 8.96 0.64 18.56 0.64 28.16 0 12.16-0.64 24.32-1.92 36.48-1.92 15.36-3.84 30.080-6.4 44.8-1.92 8.96-3.2 17.92-5.12 26.88l-3.84 15.36 8.32 2.56c15.36 4.48 30.080 9.6 45.44 15.36 11.52 4.48 23.68 9.6 35.2 15.36 10.24 5.12 20.48 10.24 30.080 16 10.88 6.4 21.12 12.8 30.72 20.48 8.32 6.4 16.64 13.44 24.32 20.48 5.76 5.76 10.88 11.52 16 17.92 3.84 5.12 7.68 10.88 10.88 16.64 4.48 8.32 7.68 16.64 10.24 25.6 1.28 5.12 1.92 10.88 1.92 16.64 0 3.2 0 7.040-0.64 10.88-0.64 5.76-1.92 12.16-3.84 17.92-1.28 5.76-3.84 10.88-6.4 16-5.76 10.88-12.8 21.12-21.12 30.72-2.56 3.2-5.12 5.76-7.68 8.32-3.84 3.84-7.040 7.040-10.88 10.24-4.48 3.84-9.6 8.32-14.72 11.52-6.4 5.12-12.8 9.6-19.2 13.44-8.32 5.76-17.28 10.88-26.24 15.36-11.52 5.76-22.4 11.52-33.92 16.64s-23.040 9.6-35.2 14.080c-10.24 3.84-20.48 7.040-30.72 10.24l-3.2 1.28c1.28 5.12 2.56 10.24 3.2 15.36 1.28 7.68 3.2 15.36 4.48 23.040 2.56 15.36 5.12 31.36 6.4 46.72 0.64 12.16 1.28 24.32 1.28 35.84 0 9.6-0.64 19.2-1.28 28.16-0.64 7.68-1.28 14.72-2.56 22.4-1.28 5.76-1.92 12.16-3.2 17.92l-3.84 14.080c-2.56 7.68-5.76 16-8.96 23.68-3.2 5.76-6.4 12.16-10.24 17.92s-8.32 10.88-13.44 16c-5.76 5.76-12.16 10.24-18.56 14.080-5.12 2.56-10.88 5.12-16 6.4-8.96 2.56-17.92 3.84-26.88 4.352-12.16 0.384-24.32-1.28-36.48-3.84-7.68-1.728-14.72-3.84-21.76-6.4-8.32-2.56-16-6.016-23.68-9.6-9.6-4.224-18.56-8.96-27.52-14.080-10.24-5.76-20.48-12.16-30.080-19.2-24.96-17.28-48.64-37.12-70.4-58.24l-5.12 4.48c-10.24 9.6-20.48 18.56-30.72 27.52-10.88 8.32-21.76 16.64-33.28 24.96-10.24 7.040-20.48 13.44-31.36 19.84-10.24 5.76-21.12 10.88-31.36 15.36-7.68 3.2-15.36 6.4-23.040 8.96-7.68 2.304-14.72 4.48-22.4 5.76-12.16 2.56-23.68 3.84-35.84 3.584-9.6 0-19.2-1.28-28.16-4.48-5.76-1.536-11.52-3.84-16.64-7.040-3.84-1.92-7.040-4.48-10.24-7.040-2.56-1.92-4.48-3.84-6.4-5.76-1.92-1.28-3.2-2.56-4.48-4.48-8.96-9.6-16-20.48-21.12-32.64l-1.92-5.76c-0.64-2.56-1.92-5.12-2.56-7.040-1.28-3.2-1.92-7.040-3.2-10.24-1.28-4.48-1.92-8.32-3.2-12.8-1.28-5.76-2.56-11.136-3.2-16.832-0.64-7.040-1.92-14.72-1.92-21.76-0.64-9.6-0.64-18.56-0.64-28.16 0-12.16 0.64-24.32 1.92-35.84 1.28-15.36 3.84-30.080 6.4-45.44l7.68-36.48-12.8-3.84c-15.36-4.672-30.080-10.24-44.8-16-10.24-3.84-19.84-8.32-30.080-13.44-8.96-4.48-17.92-8.96-26.88-14.72-11.52-6.4-22.208-13.44-32.512-21.12-8.32-6.4-16.64-13.44-24.96-21.12 2.496-13.568-3.264-19.968-8.384-26.368-4.48-5.76-8.512-11.712-12.16-18.048-3.2-5.76-5.76-11.904-8.064-18.176-0.64-2.816-1.536-5.76-2.176-8.576-1.6-5.888-2.432-11.968-2.56-18.048 0-3.84 0.128-7.68 0.512-11.392 0.384-2.816 0.832-5.76 1.472-8.512l1.856-6.848c4.096-13.44 11.2-25.984 19.84-37.12 1.152-1.664 2.368-3.2 3.648-4.736 1.664-2.048 3.392-4.032 5.12-5.952 2.432-2.688 4.928-5.248 7.552-7.808l10.88-9.6c4.8-3.84 9.6-7.68 14.592-11.52 6.4-4.48 13.056-8.96 19.84-13.44 8.32-5.12 17.024-10.24 25.856-14.72 11.264-5.76 22.784-10.88 34.56-16 21.12-8.96 42.752-16 64.768-22.4l5.12-1.28c-3.2-13.44-6.4-26.88-8.96-40.32-2.56-14.080-5.12-28.8-6.4-43.52-1.28-11.52-1.92-23.040-2.56-35.2-0.64-8.96 0-18.56 0-28.16 0-7.040 0.64-14.080 1.92-21.12 0.64-5.76 1.28-11.52 2.56-17.28 0.64-4.48 1.92-8.96 3.2-13.44 0.64-3.2 1.92-7.040 3.2-10.24l2.56-6.4c0.64-1.92 1.28-3.84 2.56-5.76 5.12-11.52 11.52-23.040 20.48-32.64 1.92-1.92 3.84-3.84 6.4-5.76 1.92-1.92 3.84-3.2 5.76-5.12 2.56-1.92 5.76-3.84 8.96-5.76 5.12-2.56 10.24-5.12 16-6.4 6.4-1.92 12.8-3.2 19.2-3.84 1.92 0 3.84-0.64 5.76-0.64h9.6l7.040 0.64c10.24 1.28 20.48 3.2 30.72 5.76 6.4 1.92 13.44 3.84 19.84 6.4 7.040 2.56 13.44 5.76 20.48 8.96 10.24 5.12 19.84 10.24 29.44 16 10.24 6.4 20.48 12.8 30.72 19.84 11.52 8.32 23.040 17.28 34.56 26.88 8.96 7.68 17.28 15.36 26.24 23.040l5.76 5.76zM768.896 694.272c-7.488 1.728-15.040 3.392-22.592 4.864-17.28 3.52-34.56 6.528-51.84 9.088-18.56 2.688-37.12 4.928-56.32 6.72-2.56 0.64-5.12 0.64-7.68 1.28-11.52 17.28-24.32 34.56-37.12 50.56-13.44 17.92-27.52 35.2-42.24 51.2l-6.4 7.040c19.2 18.56 39.040 35.84 60.8 51.2 8.96 6.4 17.92 12.16 26.88 17.92 7.68 5.12 16 8.96 24.32 13.44 7.040 3.2 14.080 6.4 21.76 8.96 5.76 1.92 11.52 3.84 17.92 5.12 5.12 1.28 10.24 2.56 15.36 2.56 4.48 0.64 8.96 0.64 12.8 0.64 6.4 0 13.44-1.28 19.2-3.84l5.12-2.56c3.84-1.92 7.040-5.12 9.6-8.32 3.84-4.48 7.040-9.6 10.24-14.72 1.28-1.28 1.92-3.2 3.2-5.12l3.2-7.68c1.28-3.2 2.56-6.4 3.2-10.24 1.28-4.48 2.56-8.32 3.2-12.8 1.28-5.76 1.92-11.52 3.2-17.28s1.28-12.16 1.92-18.56c0.64-14.080 0.64-28.16-0.64-42.24-0.64-13.44-2.56-27.52-4.48-40.96-1.92-10.88-3.84-22.4-6.4-33.28l-2.56-10.88zM257.344 696.192l-3.84 18.56c-4.48 21.248-7.68 42.752-9.6 64.448-1.28 14.336-1.28 28.8-1.28 43.136 0.64 5.76 0.64 12.16 1.28 18.56 0.64 5.76 1.92 10.88 2.56 16.64 0.64 3.84 1.92 8.32 2.56 12.16 1.28 3.2 1.92 6.4 3.2 9.6 1.28 2.56 1.92 5.12 3.2 7.68l3.2 5.76c0.64 1.28 1.28 2.56 2.56 3.84l1.92 3.2 1.92 2.56c3.84 5.12 7.68 9.6 13.44 12.8l3.84 1.92c3.2 1.28 5.76 2.56 8.96 3.2 4.48 0.64 8.32 1.28 12.8 1.28s8.96 0 12.8-0.64c5.12-0.64 10.24-1.92 15.36-2.56 6.4-1.28 12.16-3.2 17.92-5.12 7.040-2.56 13.44-5.12 20.48-8.32 9.6-4.48 18.56-8.96 26.88-14.080 9.6-5.76 19.2-12.16 28.8-18.56 9.6-7.040 19.2-14.080 28.16-21.76 5.76-4.48 10.88-8.96 16.64-14.080 4.48-4.48 9.6-8.32 14.080-12.8l1.92-1.92-10.88-12.16c-14.72-16.64-28.8-33.92-42.88-51.2-11.52-14.72-23.040-30.080-33.92-45.44h-3.84c-19.84-1.92-39.68-3.84-58.88-6.4-17.92-2.56-35.84-5.76-53.76-8.96l-21.12-4.48zM574.144 719.36c-19.2 0.896-39.040 1.28-58.88 1.408-18.56 0-37.12-0.256-56.32-0.96l-6.4-0.192 13.44 16.768c12.8 15.744 25.6 31.104 39.040 46.080 3.2 3.648 6.4 7.296 10.24 10.88l5.12-5.76c13.44-15.168 26.24-30.912 39.040-47.040 5.12-6.4 10.88-13.44 16-21.12zM606.144 350.592c-19.84-1.536-40.32-2.56-60.8-3.072-9.6-0.256-19.2-0.384-29.44-0.448h-4.48c-9.6 0-18.56 0.128-28.16 0.384-21.12 0-42.24 1.28-63.36 2.56-12.16 17.92-23.68 35.84-35.2 54.4-12.8 21.12-24.96 42.88-36.48 64.64-7.040 13.44-14.080 27.52-21.12 41.6 7.68 15.36 15.36 30.72 23.68 45.44 12.16 22.4 24.96 44.16 37.76 65.92 10.88 16.64 21.76 33.92 32.64 49.92l38.4 1.92c18.56 0.64 36.48 0.64 55.040 0.64 31.36 0 62.72-1.28 93.44-3.2 10.88-16 21.12-32.64 31.36-48.64 22.4-37.12 43.52-74.88 62.080-113.92-6.4-13.44-12.8-26.24-19.84-39.040-8.96-17.28-18.56-33.92-28.16-49.92-13.44-23.040-27.52-46.080-42.88-68.48l-2.56-3.84zM302.784 563.712c-4.48 11.52-9.6 23.424-14.080 35.2-7.040 18.24-13.44 36.608-19.2 55.040 10.88 2.56 22.4 4.608 33.28 6.528 16 2.816 32.64 5.12 48.64 7.168 4.48 0.64 8.96 1.088 13.44 1.536-7.040-11.072-14.080-22.272-20.48-33.536-14.080-23.552-27.52-47.616-40.32-72zM723.264 562.048c-6.4 12.608-13.44 24.96-19.84 37.44-7.68 13.824-15.36 27.52-23.68 41.216-5.12 9.6-10.88 18.56-16.64 28.16l9.6-1.28c16-1.92 32-4.48 47.36-7.040 12.8-1.92 26.24-4.48 39.040-7.68-5.12-17.28-11.52-34.56-18.56-51.84-4.48-12.8-10.24-25.6-15.36-37.76zM227.904 382.848l-14.080 4.224c-15.36 4.8-31.36 10.24-46.080 16.512-8.96 3.712-17.92 7.68-26.88 12.16-9.6 4.672-18.56 9.728-28.16 15.36-7.68 4.8-16 10.112-23.040 15.872-5.76 4.224-10.88 8.704-16 13.568-4.48 4.032-8.32 8.32-12.16 12.8-2.56 3.52-5.12 7.040-7.68 10.88-1.92 3.2-3.84 6.4-5.12 9.856-1.92 4.672-3.2 9.6-3.2 14.72v3.84c0 5.632 1.92 11.264 3.84 16.448l1.28 2.752 1.92 3.328 2.56 4.48 3.84 5.44 5.12 6.144c1.92 2.56 4.48 4.992 6.4 7.36 3.2 2.944 5.76 5.76 8.96 8.576 3.84 3.2 7.040 6.208 10.88 9.152 5.12 3.84 10.24 7.68 15.36 11.264 6.4 4.48 12.8 8.96 19.84 12.8 8.96 5.12 17.92 9.6 26.88 14.080 10.88 5.12 22.4 10.24 33.28 14.72 10.24 3.84 19.84 7.68 29.44 10.24l14.72 4.48 13.44-40.32c8.32-22.4 16.64-44.16 26.24-65.92l11.52-24.32-10.88-24.32c-9.6-21.76-18.56-44.8-26.88-67.2-4.48-12.16-8.96-24.96-12.8-37.76zM798.144 383.488c-3.2 11.008-7.040 21.952-10.88 32.832-7.68 22.912-16.64 45.568-26.88 67.84l-12.16 27.2 15.36 33.28c9.6 20.8 17.92 41.856 25.6 63.168 4.48 11.008 8.32 22.144 11.52 33.28l7.68-2.304c8.96-2.56 17.28-5.12 25.6-8.32 17.28-5.76 33.92-12.8 49.92-21.12 10.24-4.48 19.84-10.24 28.8-16 8.32-4.48 16-10.24 23.68-16 5.76-3.84 10.88-8.32 16-13.44 4.48-3.84 8.96-8.96 12.8-13.44 3.2-3.2 5.76-7.040 8.32-10.88 1.92-3.2 3.84-6.4 5.12-9.6 2.56-4.48 3.84-9.6 3.84-15.36 0.64-1.28 0.64-2.56 0-4.48 0-3.2-0.64-7.040-1.92-10.24-1.28-4.48-3.2-8.32-5.76-12.16l-1.92-3.84-3.2-4.48c-1.28-1.92-3.2-3.84-4.48-5.76-1.92-1.92-3.84-4.48-6.4-7.040s-5.76-5.12-8.32-7.68c-3.84-3.2-7.68-6.4-12.16-9.6-4.48-3.84-9.6-7.040-14.080-10.24-6.4-4.48-12.8-8.32-19.84-12.16-8.32-4.48-17.28-8.96-26.24-12.8-10.24-5.12-21.12-8.96-32-13.44-14.72-5.76-30.080-10.24-45.44-14.72zM512 419.776c-50.56 0-91.52 40.96-91.52 91.52 0 50.432 40.96 91.392 91.52 91.392s91.52-40.96 91.52-91.328c0-50.56-40.96-91.52-91.52-91.52zM661.504 356.48c11.264 17.536 22.080 35.456 32.512 53.568 9.6 16.768 19.072 33.728 28.16 50.88 5.44-12.928 10.688-25.984 15.68-39.168 5.76-16.192 11.52-32.512 16.64-49.024-10.88-2.56-21.76-4.8-33.28-6.848-20.48-3.84-40.32-6.912-60.8-9.472zM362.624 356.288c-9.28 1.152-18.432 2.432-27.648 3.84-15.68 2.368-31.36 5.12-46.912 8.32-5.76 1.152-12.16 2.432-17.92 3.84 5.76 17.6 11.52 35.072 17.92 52.288 4.48 12.16 9.6 24.32 14.72 36.288 11.52-21.76 23.68-44.16 36.48-65.28 8.32-12.8 16-26.24 24.32-39.040zM766.656 330.56l1.92-8.512c2.56-11.136 4.48-22.272 6.4-33.536 2.56-14.592 3.84-29.44 5.12-44.16 0.64-14.4 1.28-28.928 0.64-43.392-0.64-6.528-0.64-13.12-1.92-19.584-0.64-5.76-1.92-11.328-2.56-16.896-1.28-4.352-1.92-8.64-3.2-12.8-1.28-3.2-1.92-6.4-3.2-9.6l-1.856-7.424-2.368-4.992c-0.832-1.536-1.6-3.072-2.56-4.48-0.64-1.28-1.408-2.56-2.24-3.712-0.64-0.832-1.152-1.728-1.728-2.56-3.2-5.12-8.32-9.6-13.44-12.8-1.28-1.088-3.2-1.92-5.12-2.56-4.48-1.92-9.6-2.816-14.72-3.2-1.28 0-2.56 0-3.84-0.128h-1.28c-1.28 0-2.56 0-4.48 0.192-3.84 0-7.68 0.64-11.52 1.28-4.48 0.64-9.6 1.92-14.080 3.2l-17.28 5.76c-6.4 2.56-12.8 5.76-19.84 8.96-8.32 3.84-16 8.96-24.32 13.44-8.32 5.12-17.28 10.88-25.6 17.28-20.48 14.72-39.68 31.36-58.24 49.28l8.32 8.96c16.64 17.92 32 36.48 46.72 55.68 10.88 13.44 21.12 28.16 31.36 42.24l26.24 2.56c19.2 1.92 38.4 5.12 57.6 8.32 17.92 2.56 35.84 6.4 53.12 10.24zM481.92 200.768c-0.96-0.832-1.92-1.664-2.752-2.56-8.32-7.68-16.768-15.36-25.6-22.656-9.6-8.128-19.648-16-29.952-23.36-9.6-6.528-18.56-12.672-28.16-18.432-8.32-4.992-17.28-9.6-25.6-13.888-6.4-3.008-12.8-5.76-19.2-8.32-5.76-2.176-12.16-4.096-17.92-5.76-4.48-1.28-8.96-2.176-13.44-3.008-4.48-0.64-8.32-1.152-12.16-1.408l-4.48-0.128h-0.64c-1.28 0-2.56 0-3.84 0.128-6.4 0.32-12.8 1.472-18.56 3.968-1.92 0.832-3.84 1.792-5.76 2.944-3.84 2.368-7.040 5.376-9.6 8.64-3.84 4.48-7.040 9.408-9.6 14.592l-2.56 5.376c-1.28 1.92-1.92 4.48-2.56 7.040-1.28 3.2-2.56 5.76-3.2 8.96-0.64 3.84-1.92 8.32-2.56 12.16-0.64 5.12-1.92 10.24-2.56 16s-1.28 12.16-1.28 18.56c-0.64 14.080 0 28.16 0.64 42.24 1.28 21.76 5.12 43.52 9.6 65.28 1.28 7.040 3.2 14.080 4.48 21.12 6.4-1.92 13.44-3.2 19.84-4.48 15.36-3.2 31.36-6.4 47.36-8.32 17.28-3.2 35.2-5.12 52.48-7.040l16-1.92c10.24-14.72 21.12-28.8 32-42.88 14.080-17.92 28.8-35.84 44.16-52.48l11.52-12.8zM512.512 232l-10.432 11.52c-13.696 15.36-26.88 31.104-39.552 47.232l-10.88 14.080c7.936-0.448 15.808-0.768 23.68-0.96 10.24-0.32 20.48-0.448 30.72-0.512h7.424c9.216 0 18.432 0.128 27.648 0.32 10.56 0.256 21.12 0.64 31.616 1.088l-10.24-12.8c-13.44-17.408-27.52-34.432-42.24-50.816l-8.256-9.152z',
};

export default iconPaths;