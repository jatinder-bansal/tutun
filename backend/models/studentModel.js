
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,       
    },
    // isAvatarImageSet:{
    //     type: Boolean,
    //     default: false,
    // },
    // avatarImage:{
    //     type: String,
    //     default: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiNmZjFlYzE7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojZTZiODc2OyIvPjxwYXRoIGQ9Im0xNDEuNzQgMTk1YTExNC45MyAxMTQuOTMgMCAwIDEgMzcuOTEyIDE2LjQ1bDAuMDcgMC4wNWMtMS4xNyAwLjc5LTIuMzYwMSAxLjU1LTMuNTYwMSAyLjI5YTExNS41NSAxMTUuNTUgMCAwIDEtMTIwLjk1IDAuMjFxLTIuMDAwMS0xLjIzLTQuMDAwMi0yLjU0YTExNC43OSAxMTQuNzkgMCAwIDEgMzguMDAyLTE2LjUgMTE2LjIxIDExNi4yMSAwIDAgMSAxNS43OTEtMi40OXYtMTQuNTdjMS4zMiAwLjIyIDIuNjUwMSAwLjM5IDQuMDAwMiAwLjUxIDIuMDAwMSAwLjE5IDQuMDAwMiAwLjI4IDYuMTIwMiAwLjI5YTY0LjMzMyA2NC4zMyAwIDAgMCA4Ljg4MDQtMC42MmMwLjY3MDAzLTAuMDkgMS4zNDAxLTAuMiAyLjAwMDEtMC4zMXYxNC42OWExMTggMTE4IDAgMCAxIDE1Ljc0MSAyLjU0eiIgc3R5bGU9ImZpbGw6IzBlMDBiMTsiLz48cGF0aCBkPSJtNzkuMjkyIDIxMmEzLjQ2MDEgMy40NiAwIDAgMCAzLjg5MDIgNS4wNyAzLjM4MDEgMy4zOCAwIDAgMCAyLjEwMDEtMS42MSAzLjQ3MDEgMy40NyAwIDAgMC0xLjI4MDEtNC43MiAzLjQyMDEgMy40MiAwIDAgMC0yLjYyMDEtMC4zNCAzLjUxMDEgMy41MSAwIDAgMC0yLjA5MDEgMS42em02MC4xMjIgMC40NmEzLjQ5MDEgMy40OSAwIDAgMCAxLjIxIDQuN2gwLjA2YTMuNDYwMSAzLjQ2IDAgMCAwIDQuNzIwMi0xLjI3bDAuMDctMC4xM2EzLjQ2MDEgMy40NiAwIDAgMC0xLjM0LTQuNiAzLjQ2MDEgMy40NiAwIDAgMC0yLjU4MDEtMC4zMiAzLjUzMDEgMy41MyAwIDAgMC0yLjEwMDEgMS42MXptOS44MDA0IDUuNyA1Ljg2MDIgNS44N2MtMS4zOSAwLjUtMi43OTAxIDEtNC4yMTAyIDEuNDRsLTQuNDgwMi00LjQ3YTcuNTIwMyA3LjUyIDAgMCAxLTEuOTQwMSAwLjgxIDcuODMwMyA3LjgzIDAgMCAxLTYuMDAwMi0wLjc5IDcuODcwMyA3Ljg3IDAgMCAxLTIuOTIwMS0xMC42OXYtMC4wN2E3Ljg5MDMgNy44OSAwIDAgMSAxMC43Ny0yLjg4bDAuMTIgMC4wN2E3Ljg2MDMgNy44NiAwIDAgMSAyLjc5MDEgMTAuNjJ2MC4wN3ptLTM3LjcwMS0yLjM2LTkuNTAwNCA5LjUxdjQuOWMtMS4zNS0wLjE2LTIuNjgwMS0wLjMzLTQuMDAwMi0wLjU0di02bDAuNTgwMDItMC41OCAxMC4xLTEwLjA5YTcuODcwMyA3Ljg3IDAgMSAxIDIuODQwMSAyLjg2em03LjMyMDMtNS45MWEzLjQ2MDEgMy40NiAwIDEgMC0xLjYxMDEgMi4xIDMuMzgwMSAzLjM4IDAgMCAwIDEuNjEwMS0yLjF6bS0yOS43NDEgNy44MiAzLjA5MDEgMy4xIDAuNTkwMDIgMC41OXY3LjM2Yy0xLjM0MDEtMC4yNi0yLjY4MDEtMC41NS00LjAwMDItMC44N3YtNC44NGwtMi41MTAxLTIuNTFhNy41MjAzIDcuNTIgMCAwIDEtMS45NDAxIDAuODEgNy44ODAzIDcuODggMCAxIDEgMS45MTAxLTE0LjQzIDcuODcwMyA3Ljg3IDAgMCAxIDIuODkwMSAxMC43NXoiIHN0eWxlPSJmaWxsOiNkMWZmZmU7Ii8+PHBhdGggZD0ibTQzLjg5MSA3Ny44MzZjLTUuMTEyNCAyOC4yMzcgMi4xMzQ3IDYxLjAwNCAyNC43OTIgODEuMzMyLTYuMjM2Mi0xMi41MDMtOS41MzYyLTMzLjk0OC05LjQ4ODctNDUuNDU4LTAuNTAyMDMtMzcuNDczIDQxLjQzOS00Ni4zMzUgNTYuMTQ5LTE3LjYxNCAxOC44LTMxLjIgNTIuODI1LTE2Ljg3MiA1NC4wNjIgMTMuNzE0IDAuNTYwMTggMTMuODQ0LTAuNDM1NjggMjUuNTk4LTcuMDk2MiA0OC45NjYgMTguMzcyLTEyLjQ3IDI4LjAxMi01My45NTkgMjMuNTQ1LTgwLjk0MS00Ny40ODYtMi4yNTUyLTk0LjgzMS0yLjU3MjQtMTQxLjk2IDB6IiBzdHlsZT0iZmlsbDojRDIwMDFCOyIvPjxwYXRoIGQ9Im0xMTEuMjYgMTIuNzgyYy0xOC41MDggMC4wNzkxLTMyLjU5NCAzLjYxNjMtMzIuNTk0IDMuNjE2MyAyNC41MTMgNS42MDAyIDMyLjgwNyAxMC41MDQgMzEuNzQzIDE5LjgzNS0wLjg3MjI3IDkuNzAyLTExLjA5MiAxMC44NzUtMjAuODExIDExLjU1NC01LjI1NDggMC4zNjQxNC0xMC45NDkgMC43MTUyMy0xNi4zOTEgMS43NTI1LTExLjg2MiAyLjI4MTgtMTkuOTQ2IDQuMzczNi0yNC40NDcgMTEuOTU2LTEuNzAxMiAyLjg2NjItMy43OTQ1IDEwLjQyOC00Ljg2ODkgMTYuMzRoMTQxLjk2Yy01LjcyNDItMzguNTYzLTMyLjU1Ny02NS4wNzMtNzQuNTk1LTY1LjA1NHoiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0ibTczLjI5MiA0NC43N2MtMTEuNzg4IDIuMjgxNi0xOC45MjMgNS41NDQ0LTIzLjM5NCAxMy4xMjYtMi44NDg0IDYuNzU4Ni00Ljg0NTQgMTMuMjM4LTYuMDA3MiAxOS45MzloMTQxLjk2Yy0xLjk3NzItMTQuNTc2LTYuODY3Ny0yOC4yNDgtMTkuMjc3LTMyLjA5OC0yOC44MzQtNi4zMzA4LTYzLjc3NC02LjM1NTMtOTMuMjg1LTAuOTY3NjF6IiBzdHlsZT0iZmlsbDpub25lOyIvPjxwYXRoIGQ9Im0xNjUuOTUgMzUuNjQyYy0xMS4xNzggMjEuODI5LTkxLjg5IDE5LjM2LTEwMy45OCAyLjMwMTEtOS43MDMgMTIuMjY3LTE1LjYwNSAyNS44ODMtMTguMDc5IDM5Ljg5MmgxNDEuOTZjLTMuMDA5Ni0xNy4xNTgtOS43NDI0LTMyLjY4OC0xOS45MDItNDIuMTkzeiIgc3R5bGU9ImZpbGw6I0QyMDAxQjsiLz48cGF0aCBkPSJtMTQ1LjM4IDk1LjYyOGMtNS4xNjAxIDIuMjU5Ny0xMS4wMyAyLjI1OTctMTYuMTkgMG0tNDcuMjkgMS43NWM1LjE3NTUtMi4yNjk0IDExLjA2NS0yLjI2OTQgMTYuMjQgMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjUuOTk5OHB4O3N0cm9rZTojY2JiZGFmOyIvPjxwYXRoIGQ9Im05MC4wMTYgMTA2LjI4Yy00LjQ1MDYtMC4wMTA1LTYuNjkwMiA1LjM2NTctMy41NTA4IDguNTE5NSAzLjEzOTQgMy4xNTM5IDguNTI1MiAwLjkzODg3IDguNTM1Mi0zLjUxMTcgMC4wMDYzLTIuNzUyMi0yLjIyMDQtNC45ODk4LTQuOTcyNy00Ljk5NjFsLTAuMDExNzE5LTAuMDExNzJ6bTQ3LjI4MSAwYy00LjQ1MDYtMC4wMTA1LTYuNjkwMiA1LjM2NTctMy41NTA4IDguNTE5NSAzLjEzOTQgMy4xNTM5IDguNTI1MiAwLjkzODg3IDguNTM1Mi0zLjUxMTcgNmUtMyAtMi43NTIyLTIuMjIwNC00Ljk4OTgtNC45NzI3LTQuOTk2MWwtMC4wMTE3MS0wLjAxMTcyeiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48cGF0aCBkPSJtMTIzLjA3IDE1NC4wNWExMC42MSAxMC42MSAwIDAgMS0xNSAwLjE0bC0wLjE0LTAuMTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo2LjNweDtzdHJva2U6IzAwMDsiLz48cGF0aCBkPSJtMTIwLjEgMTQyLjIyIDAuMTktMC4xMWMzLTEuODcgNS40NS0yLjQgNy4zLTEuNDYgMi4xNSAxLjEgMy4xMiAzLjg0IDQuODQgNS41YTUuMTggNS4xOCAwIDAgMCA2LjY4IDAuNzNtLTI4LjIxLTQuNjYtMC4xOS0wLjExYy0zLTEuODctNS40NS0yLjQtNy4zLTEuNDYtMi4xNSAxLjEtMy4xMiAzLjg0LTQuODQgNS41YTUuMTggNS4xOCAwIDAgMS02LjY4IDAuNzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1Ljk5OThweDtzdHJva2U6IzRkNGQ0ZDsiLz48L3N2Zz4=",
    // },
})

module.exports = mongoose.model("student", studentSchema);