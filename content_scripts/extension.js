element = null

const onKeyDown = function (event)
{
    if (element)
    {
        if (event.key == 'Enter')
        {
            window.location.href = element.value
        }

        if (event.key == 'Escape')
        {
            document.body.removeChild(element)

            element = null
        }
    }
    else
    {
        if (event.key == 'o' && event.ctrlKey)
        {
            element = document.createElement("input")
            element.id = "panel"
            element.value = "https://"

            document.body.appendChild(element)

            element.focus()
        }
    }
}

document.addEventListener("keydown", onKeyDown, true)

const onContextMenu = function (event)
{
    event.preventDefault()
}

document.addEventListener("contextmenu", onContextMenu, true)
