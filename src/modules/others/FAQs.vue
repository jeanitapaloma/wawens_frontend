<template>
  <div class="container py-3 m-3">
    <div class="row">
      <div class="col-10 mx-auto">
        <center>
          <strong>
            <br>
            <br>
            <p style="font-size:25px; margin-left:20px; margin-bottom:10px;">
              HOW
              CAN WE HELP YOU?
            </p>
          </strong>
        </center>
        <div class="main">
          <div class="col-50 grid-margin">
            <!-- <div class="card">
            <div class="card-body">-->
            <form action="#">
              <div class="form-group d-flex search-field" style="margin-left:100px;">
                <input type="text" class="form-control" placeholder="Start typing...">
              </div>
            </form>
            <!-- </div>
            </div>-->
            <p class="mt-4 text-center" style="margin-left:50px">
              <a>You can also browse the topic of what are you looking for</a>
            </p>
          </div>
          <div class="accordion" id="faqExample">
            <p>
              <strong>FREQUENTLY ASK QUESTIONS</strong>
            </p>
            <div class="card">
              <div class="card-header p-2" id="headingOne">
                <h5 class="mb-0">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-right"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0
1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    color="white"
                  >How do I know if my order is confirmed ?</button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#faqExample"
              >
                <div class="card-body">
                  <b>Answer:</b> Once your order is confirmed and processed, you will
                  receive a shipment notification via E-mail/SMS advising you on the
                  estimated date of delivery. You can also check the current status of
                  your order, just click on order page to get real time status of your
                  order.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header p-2" id="headingTwo">
                <h5 class="mb-0">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-right"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0
1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >What payments method do you accept?</button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#faqExample"
              >
                <div class="card-body">
                  <b>Answer:</b> Cash on Delivery. Thank you!
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header p-2" id="headingThree">
                <h5 class="mb-0">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-right"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0
1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Can I change my order details?</button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#faqExample"
              >
                <div class="card-body">
                  <b>Answer:</b> You have submit your order information, it can't be
                  change due to some consequences.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header p-2" id="headingThree">
                <h5 class="mb-0">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-right"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0
1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Can I cancel my order?</button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#faqExample"
              >
                <div class="card-body">
                  <span class="label label-primary">
                    <b>Answer</b>
                  </span> It depends.
                  But if, the business owner already confirmed your delivery status or
                  it was noticed by the business then, you ca't do it anymore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->
  </div>
  <!--container-->
</template>
<style>
/* Styles for wrapping the search box *

/* Bootstrap 4 text input with search icon */
#contain {
  width: 600px;
  margin-top: auto;
  margin-bottom: auto;
  /* color: violet; */
}
.btn {
  font-style: italic;
  font-weight: bold;
  margin-top: 20px;
}
#inputfield {
  height: 70px;
}
.container {
  border-color: darkviolet;
}
.card {
  margin-right: 500px;
  width: 1100px;
  /* background-color: #dda0dd; */
  border-color: darkviolet;
}
.form-control {
  height: auto;
  margin-top: 20px;
  border-color: darkviolet;
}
</style>


