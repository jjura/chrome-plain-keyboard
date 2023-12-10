const onCreated = function (tab)
{
    if (tab.pendingUrl == "chrome://newtab/")
    {
        const updateProperties =
        {
            url: "/resources/index.html"
        }

        chrome.tabs.update(tab.id, updateProperties)
    }

    const createData =
    {
        tabId: tab.id,
        type: "panel"
    }

    chrome.windows.create(createData)
}

chrome.tabs.onCreated.addListener(onCreated)
