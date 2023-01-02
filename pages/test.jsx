import React from "react";

export const Test = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="blurred">
        <header class="header">
          <div class="header-left">
            <img
              class="weather-icon large"
              src="icons/sun.svg"
              data-current-icon
            />
            <div class="header-current-temp">
              <span data-current-temp>31</span>&deg;
            </div>
          </div>
          <div class="header-right">
            <div class="info-group">
              <div class="label">High</div>
              <div>
                <span data-current-high>32</span>&deg;
              </div>
            </div>
            <div class="info-group">
              <div class="label">FL High</div>
              <div>
                <span data-current-fl-high>27</span>&deg;
              </div>
            </div>
            <div class="info-group">
              <div class="label">Wind</div>
              <div>
                <span data-current-wind>9</span>
                <span class="value-sub-info">mph</span>
              </div>
            </div>
            <div class="info-group">
              <div class="label">Low</div>
              <div>
                <span data-current-low>19</span>&deg;
              </div>
            </div>
            <div class="info-group">
              <div class="label">FL Low</div>
              <div>
                <span data-current-fl-low>12</span>&deg;
              </div>
            </div>
            <div class="info-group">
              <div class="label">Precip</div>
              <div>
                <span data-current-precip>0.1</span>
                <span class="value-sub-info">in</span>
              </div>
            </div>
          </div>
        </header>

        <section class="day-section" data-day-section>
          <div class="day-card" id="Monday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Monday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Tuesday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Tuesday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Wednesday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Wednesday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Thusrday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Thursday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Friday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Friday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Saturday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Saturday</div>
            <div>32&deg;</div>
          </div>
          <div class="day-card" id="Sunday">
            <img src="icons/cloud.svg" class="weather-icon" />
            <div class="day-card-day">Sunday</div>
            <div>32&deg;</div>
          </div>
        </section>

        <table class="hour-section">
          <tbody data-hour-section>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>3 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>4 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>5 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>6 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>7 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>8 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>9 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>10 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>11 PM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="hour-row">
              <td>
                <div class="info-group">
                  <div class="label">Thursday</div>
                  <div>12 AM</div>
                </div>
              </td>
              <td>
                <img src="icons/cloud.svg" class="weather-icon" />
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Temp</div>
                  <div>31&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">FL Temp</div>
                  <div>25&deg;</div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Wind</div>
                  <div>
                    26<span class="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="info-group">
                  <div class="label">Precip</div>
                  <div>
                    0<span class="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <template id="day-card-template">
          <a href="#" class="day-card" tabindex="1">
            <img data-icon class="weather-icon" />
            <div class="day-card-day" data-date></div>
            <div>
              <span data-temp></span>
              <span>&deg;</span>
            </div>
          </a>
        </template>

        <template id="hour-row-template">
          <tr class="hour-row">
            <td>
              <div class="info-group">
                <div class="label" data-day></div>
                <div data-time></div>
              </div>
            </td>
            <td>
              <img data-icon class="weather-icon" />
            </td>
            <td>
              <div class="info-group">
                <div class="label">Temp</div>
                <div>
                  <span data-temp></span>
                  <span>&deg;</span>
                </div>
              </div>
            </td>
            <td>
              <div class="info-group">
                <div class="label">FL Temp</div>
                <div>
                  <span data-fl-temp></span>
                  <span>&deg;</span>
                </div>
              </div>
            </td>
            <td>
              <div class="info-group">
                <div class="label">Wind</div>
                <div>
                  <span data-wind></span>
                  <span class="value-sub-info">mph</span>
                </div>
              </div>
            </td>
            <td>
              <div class="info-group">
                <div class="label">Precip</div>
                <div>
                  <span data-precip></span>
                  <span class="value-sub-info">in</span>
                </div>
              </div>
            </td>
          </tr>
        </template>
        <script type="module" src="/main.js"></script>
      </body>
    </div>
  );
};
