import Vue from 'vue';
import '@/assets/styles/index.css';

new Vue({
  tasks: process.env.TASKBOOK_TASKS,

  computed: {
    taskTree() {
      return this.$options.tasks.reduce((result, unit) => {
        if (!result[unit.module]) {
          result[unit.module] = [];
        }
        result[unit.module].push(unit);
        return result;
      }, {});
    },

    moduleTitles() {
      return Object.entries(this.taskTree).reduce((result, [module, units]) => {
        result[module] = units[0].moduleTitle;
        return result;
      }, {});
    },
  },

  render() {
    return (
      <div id="app" class="wrapper">
        <header class="header">
          <h1>Задачи c @Vue/CLI</h1>
        </header>
        <main class="bg-grey" style="flex: 1 0 auto;">
          <div class="container">
            {Object.entries(this.taskTree).map(([module, tasks], index) => (
              <div>
                <nav key={module} style="margin: 1rem 0; font-size: 20px">
                  <p style="margin: 1rem 0; font-weight: 700;">
                    <span>{module}</span>
                    <span class="meetup-agenda__dot" />
                    <span>{this.moduleTitles[module]}</span>
                  </p>
                  {tasks.map((unit, taskIndex) => (
                    <a href={`/${unit.module}/${unit.task}`} key={unit.task} class="link" style="display: block">
                      {taskIndex + 1}. {unit.taskTitle}
                    </a>
                  ))}
                </nav>
                {index !== Object.keys(this.taskTree).length - 1 && <hr />}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  },
}).$mount('#app');
