<template>
  <div class="flex justify-center items-centers">
    <div class="w-full max-w-xl">
      <heading class="flex mb-3">Get Started</heading>
      <p class="text-90 leading-tight mb-8">
        Here We Can See Current Currency Conversion! 

<button type="button" class="btn btn-primary" @click="getconversions"> Fetch Data</button>
      </p>

      <card>
        <table class="w-full" cellpadding="0" cellspacing="0">
          <tr>
            <td class="align-top w-1/2 border-r border-b border-50">
              <a :href="resources" class="no-underline dim flex p-6">
                <div class="flex justify-center w-11 flex-no-shrink mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  > 
                    <path
                      fill="var(--primary)"
                      d="M31.51 25.86l7.32 7.31c1.0110617 1.0110616 1.4059262 2.4847161 1.035852 3.865852-.3700742 1.3811359-1.4488641 2.4599258-2.83 2.83-1.3811359.3700742-2.8547904-.0247903-3.865852-1.035852l-7.31-7.32c-7.3497931 4.4833975-16.89094893 2.7645226-22.21403734-4.0019419-5.3230884-6.7664645-4.74742381-16.4441086 1.34028151-22.53181393C11.0739495-1.11146115 20.7515936-1.68712574 27.5180581 3.63596266 34.2845226 8.95905107 36.0033975 18.5002069 31.52 25.85l-.01.01zm-3.99 4.5l7.07 7.05c.7935206.6795536 1.9763883.6338645 2.7151264-.1048736.7387381-.7387381.7844272-1.9216058.1048736-2.7151264l-7.06-7.07c-.8293081 1.0508547-1.7791453 2.0006919-2.83 2.83v.01zM17 32c8.2842712 0 15-6.7157288 15-15 0-8.28427125-6.7157288-15-15-15C8.71572875 2 2 8.71572875 2 17c0 8.2842712 6.71572875 15 15 15zm0-2C9.82029825 30 4 24.1797017 4 17S9.82029825 4 17 4c7.1797017 0 13 5.8202983 13 13s-5.8202983 13-13 13zm0-2c6.0751322 0 11-4.9248678 11-11S23.0751322 6 17 6 6 10.9248678 6 17s4.9248678 11 11 11z"
                    />
                  </svg>
                </div>

                <div>
                  <heading :level="3" class="mb-3"> INR v/s USD</heading>
                  <p class="text-90 leading-normal">
                    Currency Conversion of INR v/s USD is <h4 id="usd"></h4>
                  </p>
                </div>
              </a>
            </td>
          </tr>

          <tr>
            <td class="align-top w-1/2 border-r border-b border-50">
              <a :href="filters" class="no-underline dim flex p-6">
                <div class="flex justify-center w-11 flex-no-shrink mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <path
                      fill="var(--primary)"
                      d="M36 4V2H2v6.59l13.7 13.7c.1884143.1846305.296243.4362307.3.7v11.6l6-6v-5.6c.003757-.2637693.1115857-.5153695.3-.7L36 8.6V6H19c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1h17zM.3 9.7C.11158574 9.51536954.00375705 9.26376927 0 9V1c0-.55228475.44771525-1 1-1h36c.5522847 0 1 .44771525 1 1v8c-.003757.26376927-.1115857.51536954-.3.7L24 23.42V29c-.003757.2637693-.1115857.5153695-.3.7l-8 8c-.2857003.2801197-.7108712.3629755-1.0808485.210632C14.2491743 37.7582884 14.0056201 37.4000752 14 37V23.4L.3 9.71V9.7z"
                    />
                  </svg>
                </div>

                <div>
                  <heading :level="3" class="mb-3"> INR v/s GBP</heading>
                  <p class="text-90 leading-normal">
                   Currency Conversion of INR v/s GBP is  <h4 id="gbp"></h4>
                  </p>
                </div>
              </a>
            </td>
          </tr>

          <tr>
            <td class="align-top w-1/2 border-b border-50">
              <a :href="cards" class="no-underline dim flex p-6">
                <div class="flex justify-center w-11 flex-no-shrink mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="var(--primary)"
                      d="M29 7h5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-5v5c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1V9h-5c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1h5V2c0-.55228475.4477153-1 1-1s1 .44771525 1 1v5zM4 0h8c2.209139 0 4 1.790861 4 4v8c0 2.209139-1.790861 4-4 4H4c-2.209139 0-4-1.790861-4-4V4c0-2.209139 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2v8c0 1.1.9 2 2 2h8c1.1045695 0 2-.8954305 2-2V4c0-1.1045695-.8954305-2-2-2H4zm20 18h8c2.209139 0 4 1.790861 4 4v8c0 2.209139-1.790861 4-4 4h-8c-2.209139 0-4-1.790861-4-4v-8c0-2.209139 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2v8c0 1.1.9 2 2 2h8c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-8zM4 20h8c2.209139 0 4 1.790861 4 4v8c0 2.209139-1.790861 4-4 4H4c-2.209139 0-4-1.790861-4-4v-8c0-2.209139 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2v8c0 1.1.9 2 2 2h8c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2H4z"
                    />
                  </svg>
                </div>

                <div>
                  <heading :level="3" class="mb-3"> INR v/s EUR</heading>
                  <p class="text-90 leading-normal">
                    Currency Conversion of INR v/s EUR is  <h4 id="eur"></h4>
                  </p>
                </div>
              </a>
            </td>
          </tr>
        </table>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      getconversions() {
          Nova.request().get('/nova-vendor/currencyrates/getconversions')
             .then(data => { 
                 document.getElementById("usd").innerHTML = data.data.USD;
                 document.getElementById("gbp").innerHTML = data.data.GBP;
                 document.getElementById("eur").innerHTML = data.data.EUR;
             });
      },
      
  }
}
</script>

<style>
/* Scoped Styles */
</style>
