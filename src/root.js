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
                  </p>
                  {tasks.map((unit) => (
                    <a href={`/${unit.module}/${unit.task}`} key={unit.task} class="link" style="display: block">
                      {unit.task}
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
