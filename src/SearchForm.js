import React from "react";

export default () => (
  <form>
    <div>
      <input type="radio" id="12/9" name="date" value="12/9" />
      <label htmlFor="12/9">今日12/9</label>
      <input type="radio" id="12/10" name="date" value="12/10" />
      <label htmlFor="12/10">明日12/10</label>
      <input type="radio" id="12/15" name="date" value="12/15" />
      <label htmlFor="12/15">土曜12/15</label>
      <input type="radio" id="12/16" name="date" value="12/16" />
      <label htmlFor="12/16">日曜12/16</label>
    </div>
    <div>
      <label>開始時刻</label>
      <select>
        <option value="null">指定なし</option>
        <option value="11:30">11:30</option>
      </select>
      ~
      <select>
        <option value="null">指定なし</option>
        <option value="11:30">11:30</option>
      </select>
    </div>
  </form>
);
