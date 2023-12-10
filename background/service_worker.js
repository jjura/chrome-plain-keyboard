const onCreated = function (tab)
{
    const createData =
    {
        tabId: tab.id,
        type: "panel"
    }

    chrome.windows.create(createData)

    if (tab.pendingUrl == "chrome://newtab/")
    {
        const updateProperties =
        {
            url: "/resources/index.html"
        }

        chrome.tabs.update(tab.id, updateProperties)
    }
}

chrome.tabs.onCreated.addListener(onCreated)
