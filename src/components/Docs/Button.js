export const Button = () => {
  return (
    <div className="component">
      <h1>Button</h1>
      <p className="component-text">
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>

      <div className="component-sub">
        <h3>Primary Buttons</h3>
        <div class="flex-row justify-space-evenly component-box">
          <button class="button button-primary shadow"> Home </button>
          <button class="button button-primary shadow"> About </button>
          <button class="button button-primary shadow"> Contact </button>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522button%2520button-primary%2520shadow%2522%253E%2520Home%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522button%2520button-primary%2520shadow%2522%253E%2520About%2520%253C%252Fbutton%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Secondary Buttons</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <button class="button button-secondary shadow"> Home </button>
          <button class="button button-secondary shadow"> About </button>
          <button class="button button-secondary shadow"> Contact </button>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522button%2520button-secondary%2520shadow%2522%253E%2520Home%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522button%2520button-secondary%2520shadow%2522%253E%2520About%2520%253C%252Fbutton%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Icon Buttons</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <button class="button button-icon shadow">
            <img
              class="icon-small"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgaWQ9Im9yaWdpbmFsLWljb24iIGZpbGw9IiMzYjcwZmYiPjxwYXRoIGQ9Ik04NiwxMS40NjY2N2MtMS40OTg2LDAuMDAwMSAtMi45Mzc1OSwwLjU4Njk1IC00LjAwODg2LDEuNjM0OWwtNjIuNTQwMzYsNTEuMTUyMDhjLTAuMDcyMjMsMC4wNTQzMSAtMC4xNDMxNywwLjExMDMxIC0wLjIxMjc2LDAuMTY3OTdsLTAuMjEyNzYsMC4xNzkxN3YwLjAxMTJjLTEuMTYyMzUsMS4wODI4NSAtMS44MjMzMiwyLjU5OTQzIC0xLjgyNTI2LDQuMTg4MDJjMCwzLjE2NjQzIDIuNTY2OSw1LjczMzMzIDUuNzMzMzMsNS43MzMzM2g1LjczMzMzdjYzLjA2NjY3YzAsNi4zMzUzMyA1LjEzMTMzLDExLjQ2NjY3IDExLjQ2NjY3LDExLjQ2NjY3aDkxLjczMzMzYzYuMzM1MzMsMCAxMS40NjY2NywtNS4xMzEzMyAxMS40NjY2NywtMTEuNDY2Njd2LTYzLjA2NjY3aDUuNzMzMzNjMy4xNjY0MywwIDUuNzMzMzMsLTIuNTY2OSA1LjczMzMzLC01LjczMzMzYzAuMDAxMTcsLTEuNTkyNDkgLTAuNjYwMDYsLTMuMTEzNzIgLTEuODI1MjYsLTQuMTk5MjJsLTAuMDg5NTgsLTAuMDY3MTljLTAuMTI1NzcsLTAuMTEzOTkgLTAuMjU2NTQsLTAuMjIyMzUgLTAuMzkxOTMsLTAuMzI0NzRsLTkuMTU5ODksLTcuNDkxNDF2LTIyLjMxNzQ1YzAsLTMuMTY0OCAtMi41Njg1MywtNS43MzMzMyAtNS43MzMzMywtNS43MzMzM2gtNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsMi41Njg1MyAtNS43MzMzMyw1LjczMzMzdjguMjUyODZsLTM2LjI0NzY2LC0yOS42NTIwOGMtMS4wNTYyLC0wLjk4MTg0IC0yLjQ0MzYxLC0xLjUyOTYxIC0zLjg4NTY3LC0xLjUzNDExek0xMDMuMiw4NmgyMi45MzMzM3Y0NS44NjY2N2gtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            />
            Home
          </button>
          <button class="button button-icon shadow">
            <img
              class="icon-small"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzNiNzBmZiI+PHBhdGggZD0iTTg2LDE3LjJjLTQxLjE2NTMzLDAgLTc0LjUzMzMzLDI4LjIzNjY3IC03NC41MzMzMyw2My4wNjY2N2MwLDE1LjM0MzIxIDYuNDkxNDEsMjkuMzg5NiAxNy4yNTU5OSw0MC4zMjM3YzAuMjE3MzcsMC41NDA3NiA1Ljc0MDQ5LDE0Ljc1NDU3IC0xMC42MTU2MiwyOS4yNDg5NmMtMC41NzkxMSwwLjU0MjQgLTAuOTA3NTEsMS4zMDA1NiAtMC45MDcwMywyLjA5NDAxYzAsMS41ODMyMiAxLjI4MzQ1LDIuODY2NjcgMi44NjY2NywyLjg2NjY3YzAuMjA3MTIsLTAuMDAwMDggMC40MTM2MiwtMC4wMjI2MSAwLjYxNTg5LC0wLjA2NzE5YzE2LjQ4ODI3LC0wLjk3NjgyIDMwLjU5MzI3LC05LjE1OTI0IDM5LjIwMzksLTE1LjQ2NDMyYzguMTM3ODYsMi41ODA2OSAxNi45MTA1NSw0LjA2NDg0IDI2LjExMzU0LDQuMDY0ODRjNDEuMTY1MzMsMCA3NC41MzMzMywtMjguMjM2NjcgNzQuNTMzMzMsLTYzLjA2NjY3YzAsLTM0LjgzIC0zMy4zNjgsLTYzLjA2NjY3IC03NC41MzMzMywtNjMuMDY2Njd6TTg2LDQzYzQuNzQ3MiwwIDguNiwzLjg1MjggOC42LDguNmMwLDQuNzQ3MiAtMy44NTI4LDguNiAtOC42LDguNmMtNC43NDcyLDAgLTguNiwtMy44NTI4IC04LjYsLTguNmMwLC00Ljc0NzIgMy44NTI4LC04LjYgOC42LC04LjZ6TTgwLjI2NjY3LDc0LjUzMzMzaDExLjQ2NjY3djQwLjEzMzMzaC0xMS40NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
            />
            About
          </button>
          <button class="button button-icon shadow">
            <img
              class="icon-small"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzNiNzBmZiI+PHBhdGggZD0iTTEzNy42LDExLjQ2NjY3aC0xMTQuNjY2Njd2MTQ5LjA2NjY3aDExNC42NjY2N2M2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di0xMjYuMTMzMzNjMCwtNi4zMzUzMyAtNS4xMzEzMywtMTEuNDY2NjcgLTExLjQ2NjY3LC0xMS40NjY2N3pNNTEuNiwxMjAuNGMwLC0yMS43NDA4IDIyLjkzMzMzLC0xNS41MjU4NyAyNS44LC0yNC44NDI1M3YtNi4yMDkyYy0xLjI5LC0wLjY5MzczIC00Ljk3NjUzLC01LjQ1MjQgLTUuMzY2NCwtOS4xNjc2Yy0xLjAxNDgsLTAuMDg2IC0yLjYwODY3LC0xLjA5NTA3IC0zLjA3ODgsLTUuMDc5NzNjLTAuMjUyMjcsLTIuMTM4NTMgMC43NTEwNywtMy4zNDI1MyAxLjM1ODgsLTMuNzIwOTNjMCwwIC0xLjUxMzYsLTMuNDUxNDcgLTEuNTEzNiwtNi44NzQyN2MwLC0xMC4xODgxMyA1LjAzOTYsLTE4LjYzOTA3IDE3LjIsLTE4LjYzOTA3YzYuNTY0NjcsMCA4LjYsNC42NTU0NyA4LjYsNC42NTU0N2M1Ljg2NTIsMCA4LjYsNi40MzI4IDguNiwxMy45Nzc4N2MwLDMuNzYxMDcgLTEuNTEzNiw2Ljg3NDI3IC0xLjUxMzYsNi44NzQyN2MwLjYwNzczLDAuMzc4NCAxLjYxMTA3LDEuNTgyNCAxLjM1ODgsMy43MjA5M2MtMC40NzAxMywzLjk4NDY3IC0yLjA2NCw0Ljk5MzczIC0zLjA3ODgsNS4wNzk3M2MtMC4zODk4NywzLjcxNTIgLTQuMDc2NCw4LjQ3Mzg3IC01LjM2NjQsOS4xNjc2djYuMjA5MmMyLjg2NjY3LDkuMzIyNCAyNS44LDMuMTA3NDcgMjUuOCwyNC44NDgyN3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
            />
            Contact
          </button>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522button%2520button-icon%2520shadow%2522%253E%250A%2509%253Cimg%2520class%253D%2522icon-small%2522%2520alt%253D%2522svgImg%2522%2520src%253D%2522....%2522%2520%252F%253E%250A%2509Home%2520%250A%253C%252Fbutton%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Floating Action Buttons</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <div class="avatar avatar-blue shadow">+</div>
          <div class="avatar avatar-blue shadow">×</div>
          <div class="avatar avatar-blue shadow">-</div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520avatar-blue%2520shadow%2522%253E%252B%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522avatar%2520avatar-blue%2520shadow%2522%253E%25C3%2597%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
