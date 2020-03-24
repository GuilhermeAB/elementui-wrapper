<script>
  export default {
    name: 'XButton',
    functional: true,
    render: function (createElement, { data, children }) {
      return createElement('ElButton', data, children);
    },
  };
</script>
