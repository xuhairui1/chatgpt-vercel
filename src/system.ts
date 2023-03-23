export const setting = {
  continuousDialogue: false,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 基于OpenAI API(gpt-3.5-turbo)，请勿将网页传播至公众平台，点左下角设置按钮-填写网站密码-即可使用
- 可在设置选项中，选择开启连续对话以使用Prompt，若有使用问题需解决可联系QQ1226794176
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
