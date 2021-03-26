import Vue from 'vue';
import '@/assets/styles/index.css';

new Vue({
  data() {
    return { tasks: process.env.TASKBOOK_TASKS };
  },

  computed: {
    taskTree() {
      return this.tasks.reduce((result, unit) => {
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
      <div id="app" class="wrapper bg-grey">
        <main class="container" style="flex: 1 0 auto;">
          <h1 style="margin: 1rem 0">Задачи c @Vue/CLI</h1>
          <nav style="font-size: 20px;">
            {Object.entries(this.taskTree).map(([module, tasks]) => (
              <div>
                <p>
                  <span class="meetup-agenda__dot" />
                  <b>{module}</b>
                </p>
                <ul key={module} style="list-style-type: circle; margin-left: 2rem; color: var(--blue)">
                  {tasks.map((unit) => (
                    <li>
                      <a href={`/${unit.module}/${unit.task}`} key={unit.task} class="link">
                        {unit.task}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </main>
      </div>
    );
  },
}).$mount('#app');
