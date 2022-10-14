<script setup>
  import {ref} from 'vue'
  import Checklist from '../../components/Checklist.vue'
  import Color from '../../components/Color.vue'
  import SiteOutput from '../../components/SiteOutput.vue';

  const localKey = 'checklist';
  const defaultChecklist = [{
    id: 1,
    done: false,
    text: "Download Candidus & upload it to your publication",
    link: "https://ghost.org/help/installing-a-theme/"
  }, {
    id: 2,
    done: false,
    text: "Adjust colors to match your brand",
    link: "/candidus-docs/customization/site/colors.html"
  }, {
    id: 3,
    done: false,
    text: "Activate additional features",
    link: "/candidus-docs/intro/features.html#candidus-theme-features"
  }, {
    id: 4,
    done: false,
    text: "Activate static membership pages",
    link: "/candidus-docs/customization/static-pages.html"
  }, {
    id: 5,
    done: false,
    text: "Add more todos to this list",
    link: ""
  }]

  const onUpdate = (changedTodo) => {
    todoItems.value = todoItems.value.map((todo) => {
      if(todo.id === changedTodo.id) {
        todo.done = !changedTodo.done
      }
      return todo;
    })
    saveLocalTodos(localKey, todoItems)
  }

  const onReset = () => {
    console.log(todoItems.value)
    todoItems.value = defaultChecklist;
    localStorage.removeItem(localKey)
  }

  const saveLocalTodos = (localKey, todoItems) => {
    localStorage.setItem(localKey, JSON.stringify(todoItems.value))
  }

  const getLocalTodos = () => {
    return JSON.parse(localStorage.getItem(localKey))
  }

  const todoItems = ref(getLocalTodos() || defaultChecklist);
</script>

# Getting started with Candidus



## Quickstart

At a bare minimum, you should customize the following in your Ghost admin panel: <br> <SiteOutput path="ghost/#/settings" />

- Change the Ghost accent color under `Settings > Design > Brand > Accent color`. <Color text="We recommend using this light blue variation - #bdc5d4" color="#bdc5d4"/>
- If you're using [Ghost's membership flow](https://ghost.org/help/topic/members/), activate the built-in [static member pages](../customization/site/static-pages.md)


## Checklist

For your convenience, we've compiled a checklist to make the most out of your purchase. Its progress will be stored in your browser, so you can stop anytime and come back later.

<Checklist :items="todoItems" @change-item="onUpdate" />
